var Excel = require('exceljs');

var wb = new Excel.Workbook();
var path = require('path');
var filePath = path.resolve(__dirname, 'Tabela-de-nicks.xlsx');

var exportObj = {};

exportObj.makeSubsTabel = async function (userObj) {
    await wb.xlsx.readFile(filePath)

    var sh = wb.getWorksheet("Página1");

    
    //Get all the rows data [1st and 2nd column]
    for (i = 0; i < userObj.length; i++) {
        
        sh.getRow(i+2).getCell(1).value = i+1;
        sh.getRow(i+2).getCell(2).value = userObj[i].riotName;
        sh.getRow(i+2).getCell(3).value = userObj[i].twitchName;
        sh.getRow(i+2).getCell(4).value = userObj[i].discordName;
    }
    wb.xlsx.writeFile("lekopa.xlsx");
}

module.exports = exportObj;