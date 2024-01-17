# Writerside to PDF converter

This tool allows to convert a Writerside preview to a PDF file. The goal is to support all features of Writerside, however, some features are not yet supported. A list of supported features can be found below.

##  Usage & Requirements

This tool requires [Node.js](https://nodejs.org/en/) to be installed on your system.

```bash
npx writerside2pdf convert <writerside-instance> [output-file] [author name]
```

The Writerside instance has to be a full URL to a Writerside page (local preview also works), e.g. ```http://localhost:63342/writerside2pdf/preview/usage.html```.

Use quotes around the author name if it contains spaces.

## Example pages

The following examples are provided to showcase what works in the current version of the library.

| Example                             | Description                               |
|-------------------------------------|-------------------------------------------|
| [Tabs and Code](https://matteovalentini-at.github.io/writerside2pdf/tabs-and-code.html)   | Code blocks grouped in Tabs & edge cases  |
| [Images & Notes](https://matteovalentini-at.github.io/writerside2pdf/images-notes.html)   | Some images, notes and other basic blocks |
| [OpenAPI docs](https://matteovalentini-at.github.io/writerside2pdf/openapi-docs.html)     | A simple example using OpenAPI docs       |
| [Math & Diagrams](https://matteovalentini-at.github.io/writerside2pdf/math-diagrams.html) | Some LateX equations and diagrams         |

## Issues & Source code

If you notice any problems, please report them in the [issue tracker](https://github.com/MatteoValentini-AT/writerside2pdf/issues/)

The source code is available on [GitHub](https://github.com/MatteoValentini-AT/writerside2pdf)

### License: [MIT](LICENSE)
