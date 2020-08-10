cy-cli
======

CLI tool for automating various tasks.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cy-cli.svg)](https://npmjs.org/package/cy-cli)
[![Downloads/week](https://img.shields.io/npm/dw/cy-cli.svg)](https://npmjs.org/package/cy-cli)
[![License](https://img.shields.io/npm/l/cy-cli.svg)](https://github.com/Comyune/cy-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cy-cli
$ cy COMMAND
running command...
$ cy (-v|--version|version)
cy-cli/0.0.1 darwin-x64 node-v14.5.0
$ cy --help [COMMAND]
USAGE
  $ cy COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cy help [COMMAND]`](#cy-help-command)
* [`cy ingest`](#cy-ingest)

## `cy help [COMMAND]`

display help for cy

```
USAGE
  $ cy help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `cy ingest`

The ingest command takes various formats and processes them into a generic JSON format for manipulation and publishing.

```
USAGE
  $ cy ingest ./my-note.md

OPTIONS
  -s, --strict  Enable strict mode

DESCRIPTION
  ...
  This will take a markdown document like this:

  # Title
  Content.

  and turn it into a JSON file like this:

  {
    "title": "Title",
    "content": "Content.",
    "date": "2020-08-10"
  }
```

_See code: [src/commands/ingest.js](https://github.com/Comyune/cy-cli/blob/v0.0.1/src/commands/ingest.js)_
<!-- commandsstop -->
