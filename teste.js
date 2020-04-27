var Excel = require('exceljs');

var wb = new Excel.Workbook();
var path = require('path');
var filePath = path.resolve(__dirname, 'sample.xlsx');

wb.xlsx.readFile(filePath).then(function () {

    var sh = wb.getWorksheet("Players");

    sh.getRow(1).getCell(1).value = 32;
    wb.xlsx.writeFile("sample2.xlsx");
    console.log("Row-3 | Cell-2 - " + sh.getRow(3).getCell(2).value);

    console.log(sh.rowCount);
    //Get all the rows data [1st and 2nd column]
    for (i = 1; i <= sh.rowCount; i++) {
        if (sh.getRow(i).getCell(2).value) {
            console.log(sh.getRow(i).getCell(2).value);
            console.log(sh.getRow(i).getCell(3).value);
            console.log(sh.getRow(i).getCell(4).value);
        }
    }
});


// var foo = function (teste)
// {
//     console.log(teste);
// }

// var testeObj ={
//     acao : foo
// }

// testeObj['acao']('teste');