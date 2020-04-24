const config = require("../config.json")

const tratandoComando = function (texto) {
    if (texto[0] === "!") {
        var returnObject = {}
        texto = texto.replace('!', '');
        var arrayCommands = texto.split(" ");
        var command = config.commands[arrayCommands[0]]
        if (command) {
            returnObject['command'] = arrayCommands[0];
            if (command.validateParam) {

                if (command.parametersNumber + 1 === arrayCommands.length) {
                    for (var i = 0; i < command.parametersName.length; i++) {
                        returnObject[command.parametersName[i]] = arrayCommands[i + 1];
                    }
                } else return {
                    erro: config.errors['11']
                };
            } else {
                returnObject['content'] = texto.replace(arrayCommands[0] + " ", '');
            }
            return returnObject;
        }

    }

    return {
        erro: config.errors['1']
    };
}


module.exports = {
    tratarComando : tratandoComando
}