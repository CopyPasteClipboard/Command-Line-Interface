/* INTRO SEQUENCE
 * Exports a function that implements the frequently used functionality of handling
 * user credentials and getting the user's clipboards from CLIPPY
 */

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
