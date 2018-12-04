const program = require('commander');
const clipboardy = require('clipboardy');
const creds = require('./util/manage-credentials');
const getClipboards = require('./util/get-clipboards').getClipboards;
const sendToClipboard = require('./util/send-to-clipboard').sendToClipboard;

program
    .parse(process.argv);

// the board the user wants to copy to
var board = program.args[0];

clipped = clipboardy.readSync();
console.log(clipped);

creds.checkCredentials(() => {
    creds.getCredentials()
        .then(userId => {
            getClipboards(userId)
                .then(clipboards => {
                    // search user's clipboards for one that matches their
                    // requested clipboard
                    for (clipboard of clipboards) {
                       if (clipboard[0] === board) {
                            sendToClipboard(clipped, clipboard[1]);
                            console.log('Clipboard updated successfully :^)');
                            // only one should match, so it's safe to return
                            return;
                        } 
                    }
                });
        });
});
                
