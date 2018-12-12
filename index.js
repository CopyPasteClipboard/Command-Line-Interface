/* INDEX
 * Sets all of the commands that can be called via the CLI
 * Per Commander standard the files the actually implement the desired behavior
 * are located in the same directory with names index-<command>.js
 */

const program = require('commander');

program
    .command('list', 'list all of your global keyboards')
    .command('copy <boardname>', 'copy what is in your local clipboard to the board specified by boardname')
    .command('paste <boardname>', 'paste the contents of the clipboard specified by boardname')
    .command('create <boardname>', 'create a new board with the name specified by boardname')
    .command('rename <oldboardname> <newboardname>', 'rename a board')
    .command('delete <boardname>', 'delete the board specified by boardname')
    .parse(process.argv);
