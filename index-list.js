const creds = require('./util/manage-credentials');
const getClipboards = require('./util/get-clipboards').getClipboards;

creds.checkCredentials(() => {
    creds.getCredentials()
        .then(userId => {
            getClipboards(userId)
                .then(clipboards => {
                    for (board of clipboards) {
                        console.log(board['board_name']);
                    }
                });
        });

});
