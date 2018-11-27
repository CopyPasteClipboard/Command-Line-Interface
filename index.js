let program = require('commander');

program
    .command('list', 'list all of your global keyboards')
    .parse(process.argv);
