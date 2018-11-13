#!/usr/bin/node

const program = require('commander');

program
    .version('1.0.0')
    .command('copy [optional]', 'copy to one of your global clipboards')
    .command('paste [optional]', 'paste from one of your global clipboards')
    .command('list', 'list all of your global clipboards')
    .command('create <boardname>', 'create a new global clipboard')
    .command('delete <boardname>', 'delete one of your global clipboards')
    .command('rename <boardname_old> <boardname_new>', 'rename a clipboard')
    .command('default <boardname>', 'set a new clipboard as your default')
    .parse(process.argv);
