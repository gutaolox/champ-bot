const database = require('../database');

var exportObj = {}


exportObj.createParticipant = function (itemObj) {
    database.createItem('Participant', itemObj);

}

exportObj.getParticipant = async function (idDiscord) {
    const res = await database.getItem('Participant', idDiscord);
    return res[0];
}

exportObj.getAllParticipant = async function () {
    const res = await database.getItem('Participant');
    return res;
}


module.exports = exportObj;