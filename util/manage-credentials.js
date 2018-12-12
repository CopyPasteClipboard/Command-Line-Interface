// manage-credentials.js
// interface for reading from / supplying user credentials
const fs = require('fs');
const home = require('os').homedir();
const credentialsDir = `${home}/.clippy/`;
const fileName = 'credentials.json';
const AWS_BASE_URL = JSON.parse(fs.readFileSync('url.json', 'utf8'))['url'];

module.exports = { 
    // check to see if the user's credentials are stored on this machine
    // otherwise, ask for them
    checkCredentials: function(callback){
        if (!fs.existsSync(`${credentialsDir}${fileName}`)) {
            console.log('Please provide your CLIPPY credentials:');
            // credentials not found. prompt user for them
            const prompt = require('prompt');
            // it's probably best if the password is hidden here
            var fields = [
                {
                    name: 'username'
                },

                {
                    name: 'password',
                    hidden: true
                }
            ];
            prompt.message = '>';
            prompt.delimiter = ' ';
            prompt.start();
            prompt.get(fields, function(err, results) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Prompted successfully!');
                    if (!fs.existsSync(credentialsDir)) {
                        fs.mkdirSync(credentialsDir);
                    }
                    fs.writeFileSync(`${credentialsDir}${fileName}`, JSON.stringify({'username': results.username, 'password': results.password}));
                }
                callback();
            });

        
        } else {
            callback();
        }
        
    },

    // get the user's user-id from AWS
    // returns a Promise representing the request for this resource
    getCredentials: async function(){
        const fetch = require('node-fetch'); 
        var username = JSON.parse(fs.readFileSync(`${credentialsDir}${fileName}`, 'utf8'))['username'];
        var postURL = `${AWS_BASE_URL}v1/login`;
        var content = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'username': username})
        };

        return fetch(postURL, content)
            .then(resp => resp.json())
            .then(resp => resp['id'])
            .catch(err => console.log(err));
    }
}

