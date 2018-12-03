AWS_BASE_URL = 'http://ec2-54-173-123-45.compute-1.amazonaws.com:8080/'

module.exports = {
    // get the contents of the board specified by boardId from the global
    // clipboard. returns a Promise of the HTTPS request to this resource
    getFromClipboard: async function(boardId) {
        var getURL = `${AWS_BASE_URL}v1/clipboard/${boardId}?type=mostRecent||type=all`;
        var content = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        return fetch(getURL, content)
            .then(resp => resp.json)
            .catch(err => console.log(err));
    }
}
