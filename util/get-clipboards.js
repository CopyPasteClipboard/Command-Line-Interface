/* GET CLIPBOARDS
 * Exports function that returns the clipboards a user has on CLIPPY
 */

const fs = require('fs');
AWS_BASE_URL = JSON.parse(fs.readFileSync('url.json', 'utf8'))['url'];

module.exports = {
    // get all clipboards belonging to user
    // returns Promise of HTTPS request for this resource
    // data returned in form [ [<boardname1>, <boardid1>], ...]
    getClipboards: async function(userId) {
        const fetch = require('node-fetch');
        var getURL = `${AWS_BASE_URL}v1/user/${userId}/clipboards`;
        var content = {
                method: 'GET',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                }
        };
         
        return fetch(getURL, content)
            .then(resp => resp.json())
            .catch(err => console.log(err));        
    }
}
