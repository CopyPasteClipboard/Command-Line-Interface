const creds = require('./manage-credentials');
const getClipboards = require('./get-clipboards').getClipboards

module.exports = {
    // handles initial credentials checking and gets clipboards,
    // which is require for most commands
    introSequence: async function(callback) {
        creds.checkCredentials(function() {
            creds.getCredentials()
            .then(userId => {
                    getClipboards(userId)
                    .then(clipboards => {
                        callback(clipboards);
                    });
            });            
        });
    }
}
