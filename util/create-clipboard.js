/* CREATE CLIPBOARD
 * Exports a function which interfaces with CLIPPY to create a new clipboard
 */

const fs = require('fs');
AWS_BASE_URL = JSON.parse(fs.readFileSync('url.json', 'utf8'))['url'];

module.exports = {
    // create a clipboard with the specified name
    createClipboard: async function(boardname, userId) {
        const fetch = require('node-fetch');
        var postURL = `${AWS_BASE_URL}v1/clipboard`;
        var boardInfo = {
            'board_name': boardname,
            'user_id': userId
        };
        content = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(boardInfo)
        };

        fetch(postURL, content)
            .catch(err => console.log(err)); 
    }
}
