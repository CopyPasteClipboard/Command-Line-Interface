AWS_BASE_URL = 'http://ec2-54-173-123-45.compute-1.amazo    naws.com:8080/'

module.exports = {
    getClipboards: async function(user) {
        var getURL = `${AWS_BASE_URL}${user}`;
        fetch(getURL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }   
        });

        .catch(err => console.log(err));        
    }
}
