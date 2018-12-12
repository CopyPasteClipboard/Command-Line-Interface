const introSequence = require('./util/intro-sequence').introSequence;

introSequence(clipboards => {
    for (board of clipboards) {
        console.log(`- ${board['board_name']}`);
    }
});
