oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g writerside2pdf
$ writerside2pdf COMMAND
running command...
$ writerside2pdf (--version)
writerside2pdf/0.0.0 win32-x64 node-v21.4.0
$ writerside2pdf --help [COMMAND]
USAGE
  $ writerside2pdf COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`writerside2pdf help [COMMANDS]`](#writerside2pdf-help-commands)
* [`writerside2pdf plugins`](#writerside2pdf-plugins)
* [`writerside2pdf plugins:install PLUGIN...`](#writerside2pdf-pluginsinstall-plugin)
* [`writerside2pdf plugins:inspect PLUGIN...`](#writerside2pdf-pluginsinspect-plugin)
* [`writerside2pdf plugins:install PLUGIN...`](#writerside2pdf-pluginsinstall-plugin-1)
* [`writerside2pdf plugins:link PLUGIN`](#writerside2pdf-pluginslink-plugin)
* [`writerside2pdf plugins:uninstall PLUGIN...`](#writerside2pdf-pluginsuninstall-plugin)
* [`writerside2pdf plugins reset`](#writerside2pdf-plugins-reset)
* [`writerside2pdf plugins:uninstall PLUGIN...`](#writerside2pdf-pluginsuninstall-plugin-1)
* [`writerside2pdf plugins:uninstall PLUGIN...`](#writerside2pdf-pluginsuninstall-plugin-2)
* [`writerside2pdf plugins update`](#writerside2pdf-plugins-update)
* [`writerside2pdf writerside2pdf INSTANCE [OUTPUT] [CREATOR]`](#writerside2pdf-writerside2pdf-instance-output-creator)

## `writerside2pdf help [COMMANDS]`

Display help for writerside2pdf.

```
USAGE
  $ writerside2pdf help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for writerside2pdf.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.11/lib/commands/help.ts)_

## `writerside2pdf plugins`

List installed plugins.

```
USAGE
  $ writerside2pdf plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ writerside2pdf plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/lib/commands/plugins/index.ts)_

## `writerside2pdf plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ writerside2pdf plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ writerside2pdf plugins add

EXAMPLES
  $ writerside2pdf plugins add myplugin 

  $ writerside2pdf plugins add https://github.com/someuser/someplugin

  $ writerside2pdf plugins add someuser/someplugin
```

## `writerside2pdf plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ writerside2pdf plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ writerside2pdf plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/lib/commands/plugins/inspect.ts)_

## `writerside2pdf plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ writerside2pdf plugins install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ writerside2pdf plugins add

EXAMPLES
  $ writerside2pdf plugins install myplugin 

  $ writerside2pdf plugins install https://github.com/someuser/someplugin

  $ writerside2pdf plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/lib/commands/plugins/install.ts)_

## `writerside2pdf plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ writerside2pdf plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ writerside2pdf plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/lib/commands/plugins/link.ts)_

## `writerside2pdf plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ writerside2pdf plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ writerside2pdf plugins unlink
  $ writerside2pdf plugins remove

EXAMPLES
  $ writerside2pdf plugins remove myplugin
```

## `writerside2pdf plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ writerside2pdf plugins reset
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/lib/commands/plugins/reset.ts)_

## `writerside2pdf plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ writerside2pdf plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ writerside2pdf plugins unlink
  $ writerside2pdf plugins remove

EXAMPLES
  $ writerside2pdf plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/lib/commands/plugins/uninstall.ts)_

## `writerside2pdf plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ writerside2pdf plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ writerside2pdf plugins unlink
  $ writerside2pdf plugins remove

EXAMPLES
  $ writerside2pdf plugins unlink myplugin
```

## `writerside2pdf plugins update`

Update installed plugins.

```
USAGE
  $ writerside2pdf plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/lib/commands/plugins/update.ts)_

## `writerside2pdf writerside2pdf INSTANCE [OUTPUT] [CREATOR]`

Converts a Writerside document to PDF

```
USAGE
  $ writerside2pdf writerside2pdf INSTANCE [OUTPUT] [CREATOR]

ARGUMENTS
  INSTANCE  Writerside instance URL
  OUTPUT    output file
  CREATOR   creator

DESCRIPTION
  Converts a Writerside document to PDF

EXAMPLES
  $ writerside2pdf http://localhost:63342/writerside2pdf/preview documentation.pdf "Matteo Valentini"
```

_See code: [dist/commands/writerside2pdf.ts](https://github.com/MatteoValentini-AT/writerside2pdf/blob/v0.0.0/dist/commands/writerside2pdf.ts)_
<!-- commandsstop -->
