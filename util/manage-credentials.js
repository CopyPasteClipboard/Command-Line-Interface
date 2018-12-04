// manage-credentials.js
// interface for reading from / supplying user credentials
const fs = require('fs');

module.exports = { 
    // check to see if the user's credentials are stored on this machine
    // otherwise, ask for them
    checkCredentials: function(callback){
	const home = require('os').homedir();
        const credentialsDir = `${home}/.clippy/`;
        const fileName = 'credentials.json';
        if (!fs.existsSync(credentialsDir)) {
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
                    console.log(results.username);
                    console.log(results.password);
                    fs.mkdirSync(credentialsDir);
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
        AWS_BASE_URL = JSON.parse(fs.readFileSync('url.json', 'utf8'))['url'];
       
        const fetch = require('node-fetch'); 
        var getURL = `${AWS_BASE_URL}v1/user`;
        var content = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        return fetch(getURL, content)
            .catch(err => console.log(err));
    }
}

