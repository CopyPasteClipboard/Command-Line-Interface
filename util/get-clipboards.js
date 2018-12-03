AWS_BASE_URL = 'http://ec2-54-173-123-45.compute-1.amazonaws.com:8080/'

module.exports = {
    // get all clipboards belonging to user
    // returns Promise of HTTPS request for this resource
    // data returned in form [ [<boardname1>, <boardid1>], ...]
    getClipboards: async function(userId) {
        const fetch = require('node-fetch');
        var getURL = `${AWS_BASE_URL}v1/user/${userId}/clipboards`;
        content = {
                method: 'GET',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                };
        };
         
        return fetch(getURL, content)
            .then(resp => resp.json())
            .catch(err => console.log(err));        
    }
}
