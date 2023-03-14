function calcularMedia(notas) {

    let soma = 0;
    for (c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

let media; // escopo global

function aprovacao(notas) {

    let media = calcularMedia(notas); // escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}



function obterMedia() {

    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);

    var media = (a + b + c) / 3;

    document.getElementById("resultado").innerHTML = "Resultado:" + media;

}

//Funcao Recursiva

function contagemRegressiva(numero) {

    console.log(numero);

    let proximoNumero = numero - 1;

    if (numero > 0)
        contagemRegressiva(proximoNumero);

}

// contagemRegressiva(100);

document.addEventListener('submit', function (evento) {

    evento.preventDefault();
    evento.stopPropagation();

    let formulario = document.getElementById("formulario-01");

    let dados = new FormData(formulario);

    let objeto = {};

    let notas = [];

    for (let key of dados.keys()) {
        objeto[key] = dados.get(key);

        //adiciona itens no array
        notas.push(parseInt(dados.get(key)));
    }

    console.log(notas);

    console.log(objeto);

    texto = aprovacao(notas);

    document.getElementById('resultado').innerHTML = texto;

});
