const fs = require('fs');
AWS_BASE_URL = JSON.parse(fs.readFileSync('url.json', 'utf8'))['url'];

module.exports = {
    // get the contents of the board specified by boardId from the global
    // clipboard. returns a Promise of the HTTPS request to this resource
    getFromClipboard: async function(boardId) {
        const fetch = require('node-fetch');
        var getURL = `${AWS_BASE_URL}v1/clipboard/${boardId}?type=mostRecent`;
        var content = {
            method: 'GET',
        };
        return fetch(getURL, content)
            .then(resp => resp.json())
            .catch(err => console.error(err));
    }
}
