const mongoose = require('mongoose');
const requireDir = require('require-dir');

mongoose.connect('mongodb+srv://lekopa:asdfgh123@cluster0-phqcy.azure.mongodb.net/champsDB?retryWrites=true&w=majority', {
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
    const res = await ctrlModel.find((idFilter ? {discordId: idFilter} : {})).sort({createdAt:1});
    return res;
}


module.exports = exportObj;