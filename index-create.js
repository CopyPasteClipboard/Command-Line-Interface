const program = require('commander');
const creds = require('./util/manage-credentials');
const createClipboard = require('./util/create-clipboard').createClipboard;

program
    .parse(process.argv);

// board user wants to create
var board = program.args[0]; 

creds.checkCredentials(() => {
    creds.getCredentials()
        .then(userId => {
            createClipboard(board, userId);
            console.log('Clipboard created!');
        });
});
