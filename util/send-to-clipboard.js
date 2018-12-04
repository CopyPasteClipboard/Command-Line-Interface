const fs = require('fs');
AWS_BASE_URL = JSON.parse(fs.readFileSync('url.json', 'utf8'))['url'];

module.exports = {
    // copy the item clipped to the board specified by boardId
    sendToClipboard: async function(clipped, boardId) {
        const fetch = require('node-fetch');
        var postURL = `${AWS_BASE_URL}v1/clipboard/${boardId}/boarditem`;
        var item = {'new_item': clipped};
        content = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }

        fetch(postURL, content)
            .then(console.log('Successfully added to board'))
            .catch(err => console.log(err));    
    }   
}

