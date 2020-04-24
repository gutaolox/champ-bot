var foo = function (teste)
{
    console.log(teste);
}

var testeObj ={
    acao : foo
}

testeObj['acao']('teste');