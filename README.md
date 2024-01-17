# Writerside to PDF converter

This tool allows to convert a Writerside preview to a PDF file. The goal is to support all features of Writerside, however, some features are not yet supported. A list of supported features can be found below.

##  Usage & Requirements

This tool requires [Node.js](https://nodejs.org/en/) to be installed on your system.

```bash
npx writerside2pdf convert <writerside-instance> [output-file] [author name]
```

The Writerside instance has to be a full URL to a Writerside page (local preview also works), e.g. ```http://localhost:63342/writerside2pdf/preview/usage.html```.

Use quotes around the author name if it contains spaces.

## Issues

If you notice any problems, please report them in the [issue tracker](https://github.com/MatteoValentini-AT/writerside2pdf/issues/)

### License: [MIT](LICENSE)