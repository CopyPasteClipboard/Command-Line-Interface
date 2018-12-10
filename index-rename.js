const program = require('commander');
const creds = require('./util/manage-credentials');
const getClipboards = require('./util/get-clipboards').getClipboards;
const renameClipboard = require('./util/rename-clipboard').renameClipboard;

program
    .parse(process.argv);

// the board the user wants to rename
var oldBoard = program.args[0];

// the new name
var newBoard = program.args[1];

creds.checkCredentials(() => {
    creds.getCredentials()
        .then(userId => {
            getClipboards(userId)
                .then(clipboards => {
                    // search user's clipboards for one that matches their
                    // requested clipboard
                    for (clipboard of clipboards) {
                       if (clipboard['board_name'] === oldBoard) {
                            renameClipboard(clipboard['id'], newBoard);
                            console.log('Clipboard renamed successfully');
                            // only one should match, so it's safe to return
                            return;
                        } 
                    }
                });
        });
});
