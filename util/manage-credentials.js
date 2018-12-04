// manage-credentials.js
// interface for reading from / supplying user credentials

const fs = require('fs');
AWS_BASE_URL = JSON.parse(fs.readFileSync('url.json', 'utf8'))['url'];

module.exports = { 
    // check to see if the user's credentials are stored on this machine
    // otherwise, ask for them
    checkCredentials: function(){
        const credentialsDir = '~/';
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
            });
        }
        
    }
}

