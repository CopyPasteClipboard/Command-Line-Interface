const fs = require('fs');
AWS_BASE_URL = JSON.parse(fs.readFileSync('url.json', 'utf8'))['url'];

module.exports = {
    // delete the user's clipboard with id boardId
    deleteClipboard: async function(boardId) {
        const fetch = require('node-fetch');
        var deleteURL = `${AWS_BASE_URL}v1/clipboard/${boardId}`;
        content = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        };

        fetch(deleteURL, content)
            .then(console.log('Successfully deleted board'))
            .catch(err => console.log(err)); 
    }
}
