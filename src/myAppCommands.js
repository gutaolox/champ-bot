const Discord = require("discord.js");

const config = require('../config.json');

const participant = require('./service/participantService');

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
        }
        else{
            msg.reply("Você já está registrado");
        }
    } catch (e) {
        console.log(e)
        msg.reply('perdão mas ocorreu um erro por favor use !report para notificar os desenvolvedores');
    }
}

module.exports = {
    consegui: commandConsegue,
    tft: commandTft,
    ping: commandPing,
    register: commmandRegister,
    graça: commandGraca

}