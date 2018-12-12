/* INDEX COPY
 * Copy something from the user's clipboard into CLIPPY 
 * Called via index.js
 */

const program = require('commander');
const clipboardy = require('clipboardy');
const introSequence = require('./util/intro-sequence').introSequence;
const sendToClipboard = require('./util/send-to-clipboard').sendToClipboard;

program.parse(process.argv);

// the board the user wants to copy to
var board = program.args[0];

var clipped = clipboardy.readSync();

introSequence(clipboards => {
        // search user's clipboards for one that matches their
        // requested clipboard
        for (clipboard of clipboards) {
           if (clipboard['board_name'] === board) {
                sendToClipboard(clipped, clipboard['id']);
                console.log('Clipboard updated successfully');
                // only one should match, so it's safe to return
                return;
            } 
        }
});
                
