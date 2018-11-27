let getModule = require('./get-clipboards');
var get = getModule.getClipboards;

var user = 'samuel';

get(user)
    .then(clipboards => {
        for (board of clipboards) {
            console.log(board[0]);
        }
    });
