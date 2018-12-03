AWS_BASE_URL = 'http://ec2-54-173-123-45.compute-1.amazonaws.com:8080/'

module.exports = {
    // copy the item clipped to the board specified by boardId
    sendToClipboard: async function(clipped, boardId) {
        const fetch = require('node-fetch');
        var postURL = `${AWS_BASE_URL}/v1/clipboard/${boardId}/boarditem`;
        item = {'new_item': clipped};
        content = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }

        return fetch(postURL, content)
            .then(console.log('Successfully added to board'))
            .catch(err => console.log(err));    
    }   
}

