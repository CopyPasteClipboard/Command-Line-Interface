const fs = require('fs');
AWS_BASE_URL = JSON.parse(fs.readFileSync('url.json', 'utf8'))['url'];

module.exports = {
    // create a clipboard with the specified name
    createClipboard: async function(boardname, userId) {
        const fetch = require('node-fetch');
        var postURL = `${AWS_BASE_URL}v1/clipboard`;
        var boardInfo = {
            'boardname': boardname,
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
            .then(console.log('Successfully created board'))
            .catch(err => console.log(err)); 
    }
}
