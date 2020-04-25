const auth = require("./auth.json");
const Discord = require('discord.js');
const stringUtil = require('./src/stringUtil');
const config = require('./config.json');
const commandsActions = require('./src/myAppCommands');


const client = new Discord.Client();
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
    if (msg.channel.name === 'geral') {
        const commandObjs = stringUtil.tratarComando(msg.content);
        if (!commandObjs.erro) {
            commandsActions[commandObjs.command](msg, commandObjs);
        } else {
            if (commandObjs.erro === config.errors['1']) {
                return
            } else {
                msg.reply(commandObjs.erro);
            }
        }
    }

});

client.login(auth.token);