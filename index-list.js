/* INDEX list
 * List user's CLIPPY clipboards
 * Called via index.js
 */

const introSequence = require('./util/intro-sequence').introSequence;

introSequence(clipboards => {
    for (board of clipboards) {
        console.log(`- ${board['board_name']}`);
    }
});
