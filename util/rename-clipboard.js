const fs = require('fs');
AWS_BASE_URL = JSON.parse(fs.readFileSync('url.json', 'utf8'))['url'];

module.exports = {
    // create a clipboard with the specified name
    renameClipboard: async function(boardId, newName) {
        const fetch = require('node-fetch');
        var putURL = `${AWS_BASE_URL}v1/clipboard/${boardId}`;
        var boardInfo = {
            'boardname': newName,
        };
        content = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(boardInfo)
        };

        fetch(putURL, content)
            .then(console.log('Successfully renamed board'))
            .catch(err => console.log(err)); 
    }
}
