const Discord = require("discord.js");

const config = require('../config.json');

const participant = require('./service/participantService');

const excel = require('./excelService');

/**
 * @param {Discord.Message} [msg] msg Recieved
 */
const commandConsegue = function (msg, treatedObj) {

    var channel = msg.channel;
    var text = "";
    channel.members.forEach(m => {
        if (m.displayName !== msg.author.username && m.id !== msg.client.user.id)
            text += "@" + m.displayName + ", ";
    })
    text += "ele conseguiu";
    msg.channel.send(text);
}

/**
 * @param {Discord.Message} [msg] msg Recieved
 */
const commandTft = function (msg, treatedObj) {
    msg.channel.send('quem fizer kayle de morello é corno');
}

/**
 * @param {Discord.Message} [msg] msg Recieved
 */
const commandPing = function (msg, treatedObj) {
    msg.reply('pong');
}

/**
 * @param {Discord.Message} [msg] msg Recieved
 */
const commandGraca = function (msg, treatedObj) {
    msg.reply('Achei que perguntaria! :D');
}

/**
 * @param {Discord.Message} [msg] msg Recieved
 */
const commmandRegister = async function (msg, treatedObj) {
    const insertObj = {
        riotName: treatedObj.riotName,
        twitchName: treatedObj.twitchName,
        discordId: msg.author.id,
        discordName: msg.author.username
    }
    try {
        var checkParticipant = await participant.getParticipant(msg.author.id);
        if (!checkParticipant) {
            participant.createParticipant(insertObj);
            msg.reply("Registrado com sucesso.");
        } else {
            msg.reply("Você já está registrado");
        }
    } catch (e) {
        console.log(e)
        msg.reply('perdão mas ocorreu um erro por favor notifique os desenvolvedores');
    }
}
/**
 * @param {Discord.Message} [msg] msg Recieved
 */
var commandTabela = async function (msg, treatedObj) {
    var arrayId = ["259425470762713090", "301046285698465792", "267494662665666569", "267494662665666569"];
    if (arrayId.includes(msg.author.id)) {
        var participantArray = await participant.getAllParticipant();
        await excel.makeSubsTabel(participantArray);
        msg.author.send({
            files: ['lekopa.xlsx']
        });
    }
    else{
        msg.reply('Você não tem permissão!');
    }
}

/**
 * @param {Discord.Message} [msg] msg Recieved
 */
var commandCheckInscription = async function (msg, treatedObj) {
    var user = await participant.getParticipant(msg.author.id);
    if (user) {
        msg.reply("Você está inscrito! \n Seu nick no lol é:" + user.riotName + '!\n E seu nome na twitch é:' + user.twitchName + "!");
    } else {
        msg.reply("Você não está inscrito!");
    }
}

module.exports = {
    consegui: commandConsegue,
    tft: commandTft,
    ping: commandPing,
    registro: commmandRegister,
    graça: commandGraca,
    tabela: commandTabela,
    check: commandCheckInscription


}