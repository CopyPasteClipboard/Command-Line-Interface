## A Command Line Interface for Clippy

### Usage
Usage: index [options] [command]

Options:
  -h, --help                            output usage information

Commands:
  list                                  list all of your global keyboards
  copy <boardname>                      copy what is in your local clipboard to the board specified by boardname
  paste <boardname>                     paste the contents of the clipboard specified by boardname
  create <boardname>                    create a new board with the name specified by boardname
  rename <oldboardname> <newboardname>  rename a board
  delete <boardname>                    delete the board specified by boardname
  help [cmd]                            display help for [cmd]

