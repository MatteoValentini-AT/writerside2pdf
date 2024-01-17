// @ts-nocheck

import fs from 'node:fs'
import PDFMerger from 'pdf-merger-js';
import puppeteer from 'puppeteer'
import {Args, Command} from "@oclif/core";

export default class Convert extends Command {
    static args = {
        instance: Args.string({description: 'Writerside instance URL', required: true}),
        output: Args.string({description: 'output file', required: false}),
        creator: Args.string({description: 'creator', required: false}),
    }

    static description = 'Converts a Writerside document to PDF'

    static examples = [
        '$ convert http://localhost:63342/writerside2pdf/preview documentation.pdf "Matteo Valentini"',
    ]

    convert = async (baseURL, output, title, author) => {
        baseURL = baseURL.endsWith('/') ? baseURL : (baseURL + '/');

        const tree = await fetch(baseURL + 'HelpTOC.json').then(res => res.json())
        const meta = {
            author,
            creator: author,
            producer: author,
            title
        }

        if (!fs.existsSync('pages'))
            fs.mkdirSync('pages')

        const pages = [];
        const addPages = (obj) => {
            if (obj.url)
                pages.push(obj.url)
            if (obj.pages) {
                if (Array.isArray(obj.pages))
                    for (const page of obj.pages) addPages(page)
                else
                    for (const page of Object.values(obj.pages)) addPages(page)
            }
        }

        addPages(tree.entities)

        let completed = 1

        const loadPage = async (url, output) => {
            console.log('Converting ' + url + ' (' + completed + '/' + pages.length + ')')
            completed++
            try {
                const browser = await puppeteer.launch({
                    headless: "new"
                });
                const page = await browser.newPage();
                await page.setViewport({
                    height: 2970,
                    width: 2100
                })
                await page.goto(baseURL + url);

                await page.evaluate(params => {
                    for (const e of [...document.querySelectorAll('button')]
                        .filter(e => e.dataset.test === 'theme-switcher')) e.click()
                    try {
                        document.querySelectorAll('article')[0].style.paddingTop = '0px'
                    } catch {
                    }

                    try {
                        document.querySelectorAll('header')[0].style.display = 'none'
                    } catch {
                    }

                    try {
                        document.querySelectorAll('.layout.app__sidebar')[0].style.display = 'none'
                    } catch {
                    }

                    try {
                        document.querySelectorAll('aside')[0].style.display = 'none'
                    } catch {
                    }

                    try {
                        document.querySelectorAll('.layout--container-content')[0].style.margin = '0px'
                    } catch {
                    }

                    document.querySelector(':root').style.setProperty('--wh-max-width-l', 2000)
                    const insertAfter = (referenceNode, newNode) => referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);

                    for (const tabList of [...document.querySelectorAll('div')].filter(div => div.dataset.test === "tab-list-wrapper")) {
                        const tabs = tabList.querySelectorAll('.tabs__content-wrapper')
                        for (let j = tabs.length - 1; j >= 0; j--) {
                            const newTabList = j > 0 ? tabList.cloneNode(true) : tabList
                            newTabList.style.breakInside = 'avoid'
                            const contents = newTabList.querySelectorAll('.tabs__content-wrapper');
                            const tabHeaders = [...newTabList.querySelectorAll('div')].filter(header => header.getAttribute('role') === "tab");
                            const selectedTag = tabHeaders[0].className.split(' ').find(tag => tag.includes('select'));
                            for (const [k, content] of contents.entries()) {
                                content.style.display = k === j ? 'block' : 'none'
                                if (k === j)
                                    tabHeaders[k].classList.add(selectedTag)
                                else
                                    tabHeaders[k].classList.remove(selectedTag)
                                tabHeaders[k].style.boxShadow = 'none'
                            }

                            tabHeaders.at(-1).nextElementSibling.style.display = "none"
                            if (j > 0)
                                insertAfter(tabList, newTabList)
                        }
                    }

                    for (const e of document.querySelectorAll('.prompt')) e.style.maxWidth = '2000px'
                    ; for (const e of document.querySelectorAll('code')) {
                        if (e.clientWidth > e.parentElement.clientWidth - 32) {
                            const scale = (e.parentElement.clientWidth - 128) / e.clientWidth
                            e.style.transform = 'scale(' + scale + ')'
                            e.parentElement.style.justifyContent = 'center'
                            e.parentElement.style.alignItems = 'center'
                            e.parentElement.style.height = ((e.clientHeight * scale) + 24) + 'px'
                            e.parentElement.style.overflow = 'hidden'
                        } else
                            e.parentElement.parentElement.style.width = 'fit-content'
                    }

                    for (const e of document.querySelectorAll('.collapse__button')) {
                        if (!e.className.includes('collapse__button--active'))
                            e.click()
                        e.style.visibility = 'hidden'
                    }

                    for (let i = 0; i < 10; i++) {
                        for (const e of document.querySelectorAll('.api-parameter__icon-chevron')) {
                            if (!e.children[0].className.baseVal.includes('toc-icon--opened'))
                                e.click()
                            e.style.visibility = 'hidden'
                        }

                        for (const e of document.querySelectorAll('.collapsible-item__icon-chevron')) {
                            if (!e.children[0].className.baseVal.includes('toc-icon--opened'))
                                e.click()
                            e.style.visibility = 'hidden'
                        }

                        for (const e of document.querySelectorAll('.api-parameter-group__button')) {
                            if (e.innerHTML === "Hide Descriptions")
                                e.style.display = 'none'
                        }
                    }

                    for (const e of document.querySelectorAll('.wt-row')) {
                        e.style.flexDirection = 'column'
                        ;for (const c of e.children) c.style.setProperty('--wt-col-count', 500)
                    }

                    for (const e of document.querySelectorAll('a')) {
                        if (e.href.startsWith(params.baseURL)) {
                            e.href = '#'
                            e.style.textDecoration = 'none'
                        }
                    }
                }, {
                    baseURL,
                    filename: url.split('.')[0]
                });

                // Wait for images to load
                await new Promise((resolve) => {
                    setTimeout(resolve, 100)
                })

                await page.addStyleTag({
                    content: `
                    @page { margin-top: 1cm; margin-bottom: 0.5cm; }
                    @page:first { margin-top: 0; }
                `,
                });

                await page.pdf({
                    displayHeaderFooter: false,
                    path: output,
                    scale: 0.75,
                    width: '21cm',
                });

                await browser.close();
            } catch (error) {
                console.log(error);
            }
        }

        const merger = new PDFMerger();

        for (const page of pages) {
            await loadPage(page, 'pages/' + page.replaceAll('.html', '.pdf'))
            await merger.add('pages/' + page.replaceAll('.html', '.pdf'))
        }

        console.log('Combining pages...')

        await merger.setMetadata(meta);
        await merger.save(output);
        fs.rmSync('pages', {recursive: true})
        console.log('Done! Created ' + output + '.pdf')
    }


    async run() {
        const {args} = await this.parse(Convert)
        if (/^https?:\/\/[\d.:A-Za-z-]*\/[\d.A-Za-z-]*\/preview/g.test(args.instance)) {
            const matches = args.instance.match(/^https?:\/\/[\d.:A-Za-z-]*\/[\d.A-Za-z-]*\/preview/g)
            if (matches == null) {
                this.error('Invalid Writerside instance URL')
                return
            }
            const instance: string = matches[0]
            try {
                const config = await fetch(instance + '/config.json').then(res => res.json())
                args.output = args.output || config.productName + '_' + config.productVersion + '.pdf'
                this.log('Converting ' + config.productName + ' to PDF...')
                try {
                    await this.convert(instance, args.output, config.productName,
                        args.creator ? args.creator.replaceAll('"', '') : 'writerside2pdf')
                } catch (e) {
                    this.error('The following error occurred while converting the document: ' + e)
                }
            } catch(e) {
                this.error('Unable to connect Writerside instance')
            }
        } else {
            this.error('Invalid Writerside instance URL')
        }
    }
}
