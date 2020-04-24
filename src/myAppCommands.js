const Discord = require( "discord.js");

const config = require( '../config.json');

/**
 * @param {Discord.Message} [msg] msg Recieved
 */
const commandConsegue = function (msg, treatedObj) {
    var channel = msg.guild.channels.cache.find(ch => {
        console.log(ch.name)
        return ch.name === 'geral'
    });
    var text = "";
    channel.members.forEach(m => {
        if (m.displayName !== msg.author.username && m.id !== msg.client.user.id)
            text += "@"+m.displayName + ", ";
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

module.exports = {
    consegui: commandConsegue,
    tft: commandTft,
    ping: commandPing

}