////////////////////////////////////////////////////
//                                                //
//  Jogo da Palavra Misteriosa                    //
//                                                //
////////////////////////////////////////////////////



console.log( 'Pronto!\n' );

var letra, resposta = "ACBFD";

var palavra = "";
resposta = resposta.split( "" );

var palavraMisturada = resposta;

var respostas = [
    "palavras",
    "que",
    "a",
    "gente",
    "escolher"
];

function aleatorizar( palavra ){
    palavra.sort( randOrder );
}

function randOrder(){
    return .5 - Math.random();
}
aleatorizar( palavraMisturada );

/*
function alertaMeio(){
    console.log( 'Você clicou no meio!' );
}
*/

function Assembly( elemento ){
    var letra = pegarValue( elemento );

    console.log( letra );
    //palavra = palavra.join("");
    palavra = juntarLetra( palavra, letra );

    var resposta = document.querySelector( '#RESULTADO p' );

    escreverTexto( resposta, palavra );


}


function pegarValue( elemento ){
    return elemento.value;
}

function juntarLetra( palavra, letra ){
    palavra += letra;
    return palavra;
}

function escreverTexto( elemento, texto ){
    elemento.innerText = texto;
    //elemento.id = "RESULTADO";
}

function apagarLetra( palavra ){
    palavra = palavra - palavra[ palavra.length - 1 ];
    return palavra;
}


function MontarCronometro( elemento ){
}
/*
var counter = 10;
var timer = setInterval(function() {
  if( counter <= 0 ) {
    clearInterval( timer );
  }
  
  console.log( counter-- );
}, 1000);
*/
/*
function MontarCronometro( elemento ){
    var counter = 0;
    function myTimer() {
      var timer = setTimeout( function() {
        console.log( counter++ );
        if( counter < 11 ) {
          var texto = counter/60;
      
          texto = juntarLetra( texto, ':' );
          texto = juntarLetra( texto, counter );
          escreverTexto( elemento, texto );
          
          myTimer();
        }
      }, 1000 );
    }
      
    myTimer();
}
*/
/*
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
*/
function impedirZoom(){
    var viewport = document.querySelector( 'meta[name="viewport"]' );
    viewport.content = 'user-scalable=NO, width=device-width, initial-scale=1.0';
}

function verificarPalavra(){
    if( document.querySelector( '#RESULTADO p' ).innerText == resposta.join( "" ) ){
        alert( "Você é demais! A palavra era " + resposta + "." );
    }
}

function removerLetra( pai, posicao ){
    posicao--;
    var letra = '?';
    if( pai.hasChildNodes() ){
        letra = pai.removeChild( pai.childNodes[posicao] );
    }
    return letra;
}

// Sobre o Painel

function pegarLetraAleatoria( palavra ){
    let posicaoDaLetra = Math.random( 0, palavra.length );
    return palavra[ posicaoDaLetra ];
}

function montarPainel( parent, palavra, botoes ){

}
