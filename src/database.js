const mongoose = require('mongoose');
const requireDir = require('require-dir');

mongoose.connect('mongodb://localhost:27017/champsDb', {
    useNewUrlParser: true
})

requireDir('./models');
var exportObj = {}

exportObj.createItem = function (model, insertObj) {
    const ctrlModel = mongoose.model(model);
    ctrlModel.create(insertObj);
}

exportObj.getItem = async function (model, idFilter) {
    const ctrlModel = mongoose.model(model);
    const res = await ctrlModel.find((idFilter ? {discordId: idFilter} : {}));
    return res;
}


module.exports = exportObj;