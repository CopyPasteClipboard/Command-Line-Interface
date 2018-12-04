let program = require('commander');

program
    .command('list', 'list all of your global keyboards')
    .command('copy <boardname>', 'copy what is in your local clipboard to the board specified by boardname')
    .parse(process.argv);
