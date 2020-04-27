const config = require("../config.json")

const tratandoComando = function (texto) {
    if (texto[0] === "!") {
        var returnObject = {}
        texto = texto.replace('!', '');
        var arrayCommands = texto.split(" ");
        var command = config.commands[arrayCommands[0]]
        if (command) {
            returnObject['command'] = arrayCommands[0];
            var arrayAux = [];
            arrayAux.push(arrayCommands[0]);
            var strAux = '';
            for (var i = 1; i < arrayCommands.length - 1; i++) {

                strAux += i == 1 ? arrayCommands[i] : ' ' + arrayCommands[i];
            }
            arrayAux.push(strAux);
            arrayAux.push(arrayCommands[arrayCommands.length - 1]);
            console.log(arrayAux);
            arrayCommands = arrayAux;
            if (command.validateParam) {

                if (command.parametersNumber + 1 === arrayCommands.length) {
                    for (var i = 0; i < command.parameterName.length; i++) {
                        returnObject[command.parameterName[i]] = arrayCommands[i + 1];
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
    tratarComando: tratandoComando
}