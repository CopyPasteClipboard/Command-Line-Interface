const program = require('commander');
const introSequence = require('./util/intro-sequence').introSequence;
const deleteClipboard = require('./util/delete-clipboard').deleteClipboard;

program
    .parse(process.argv);

// the board the user wants to delete
var board = program.args[0];

introSequence(clipboards => {
    // search user's clipboards for one that matches their
    // requested clipboard
    for (clipboard of clipboards) {
       if (clipboard['board_name'] === board) {
            deleteClipboard(clipboard['id']);
            console.log('Clipboard successfully annihilated!');
            // only one should match, so it's safe to return
            return;
        } 
    }
});
