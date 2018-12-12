const program = require('commander');
const clipboardy = require('clipboardy');
const introSequence = require('./util/intro-sequence').introSequence;
const getFromClipboard = require('./util/get-from-clipboard').getFromClipboard;

program.parse(process.argv);

// board user wants to copy to
var board = program.args[0]; 

introSequence(clipboards => {
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
