/* SEND TO CLIPBOARD
 * Exports a function which sends something to one of the user's CLIPPY clipboards
 */

const fs = require('fs');
AWS_BASE_URL = JSON.parse(fs.readFileSync('url.json', 'utf8'))['url'];

module.exports = {
    // copy the item clipped to the board specified by boardId
    sendToClipboard: async function(clipped, boardId) {
        const fetch = require('node-fetch');
        var postURL = `${AWS_BASE_URL}v1/clipboard/${boardId}/boarditem`;
        var item = {'board_item': clipped};
        content = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }

        fetch(postURL, content)
            .catch(err => console.log(err));    
    }   
}

