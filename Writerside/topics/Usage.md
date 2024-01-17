# Writerside to PDF converter

This tool allows to convert a Writerside preview to a PDF file. The goal is to support all features of Writerside, however, some features are not yet supported. A list of supported features can be found below.

##  Usage & Requirements

This tool requires [Node.js](https://nodejs.org/en/) to be installed on your system.

```bash
npx writerside2pdf <writerside-instance> [output-file] [author name]
```

The Writerside instance has to be a full URL to a Writerside page (local preview also works), e.g. ```http://localhost:63342/writerside2pdf/preview/usage.html```.

Use quotes around the author name if it contains spaces.

## Example pages

The following examples are provided to showcase what works in the current version of the library.
If you notice any problems, please report them in the [issue tracker]().

| Example                             | Description                                  |
|-------------------------------------|----------------------------------------------|
| [Tabs and Code](Tabs-and-Code.md)   | A simple example using tabs and code blocks. |
| [Images & Notes](Images-Notes.md)   | A simple example using images and notes.     |
| [OpenAPI docs](OpenAPI-docs.md)     | A simple example using OpenAPI docs.         |
| [Math & Diagrams](Math-Diagrams.md) | A simple example using Math and Diagrams.    |

## Supported features
| Element         | Status |
|-----------------|--------|
| Basic Markdown  | ✅      |
| Tip             | ✅      |
| Note            | ✅      |
| Warning         | ✅      |
| Tabs            | ✅      |
| Code Blocks     | ✅      |
| Tables          | ✅      |
| Images          | ✅      |
| OpenAPI Docs    | ✅      |
| TLDR            | ✅      |
| Collapsible     | ✅      |
| Lists           | ✅      |
| Definition List | ✅      |
| Math            | ✅      |
| Diagrams        | ✅      |
| External Links  | ✅      |
| Internal Links  | ❌      |
| Footnotes       | ❌      |
| Tooltips        | ❌      |
| Switchable      | ❌      |