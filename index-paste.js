const program = require('commander');
const clipboardy = require('clipboardy');
const creds = require('./util/manage-credentials');
const getClipboards = require('./util/get-clipboards').getClipboards;
const getFromClipboard = require('./util/get-from-clipboard').getFromClipboard;

program
    .parse(process.argv);

// board user wants to copy to
var board = program.args[0]; 

creds.checkCredentials(() => {
    creds.getCredentials()
        .then(userId => {
            getClipboards(userId)
                .then(clipboards => {
                    // search user's clipboards for one the matches their
                    // requested clipboard
                    for (clipboard of clipboards) {
                        if (clipboard['board_name'] === board) {
                            // the board has been found! get the content of the clipboard to paste
                            getFromClipboard(clipboard['id'])
                                .then(item => {
                                    console.log(item[0]['text_content']);
                                });
                            
                            // should only be one match, so it is okay to return now
                            return;
                        }

                    }
                });
        });
});
