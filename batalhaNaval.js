var rl = require('readline-sync');

var tabuleiro = [];

var linhas = 5;
var colunas = 5;


function criarTabuleiro() {
  var i, j;
  var colunasLinha = [];

  for(i = 0; i < linhas; i++){
    tabuleiro[i] = [];

    for(j = 0; j < colunas; j++){
      tabuleiro[i][j] = "agua";
    }
  }
}

function escondeBarco(){
  var posicaoLinha = Math.floor(Math.random() * 5);
  var posicaoColuna = Math.floor(Math.random() * 5);

  tabuleiro[posicaoLinha][posicaoColuna] = "barco";

}

function tiro(){
  var linhsUser = rl.question('Informe a linha (0 - 4) :');
  var colunaUser = rl.question('Informe a coluna (0 - 4) :');

  if(tabuleiro[linhsUser][colunaUser] == "barco"){
    win = true;
    console.log(tabuleiro);
    console.log("Wiiinnnn!!");
  }else{
    console.log("Schuaaaa!");
  }
}


criarTabuleiro();
escondeBarco();


var win = false;

while(win == false){
  tiro();
}
