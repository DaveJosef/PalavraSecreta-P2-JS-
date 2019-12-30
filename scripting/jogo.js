//////////////////////////////////////////////////*
//
//  Jogo da Palavra Misteriosa
//  
///////////////////////////////////////////////////


var palavra = "";
var tamanho = 5;

function juntarLetra( letra, palavra, tamanho ){
    if( palavra.length < tamanho ){
        palavra = palavra + letra;
        return 1;
    }
}

function pegarLetra( elemento ){
    return elemento.value;
}


