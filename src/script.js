//essas functions criei para realizar as operações e
//retornarem os valores para serem exibidos na tela, 
// usei o for na function somar e multiplicar, porque 
// serão sempre valores fixos, começam com 0 e vão ate 10
function somar(numero) {
  let resultadoAdicao = [];
  for (var i = 0; i <= 10; i++) {
    let resultado = numero + i;
    resultadoAdicao.push(`${numero} + ${i} = ${resultado}`);
  }
  return resultadoAdicao;
}


//nas functions subtrair e dividir decidi usar o while,
//pois o valor i vai ser alterado de acordo com o valor 
//do numero escolhido(no caso do subtrair para não ter valores 
//negativos e para o dividir, para não ter valores decimais)

function subtrair(numero) {
  let resultadoSubtracao = [];
  let i = numero;
  while (i <= numero + 10){
    let resultado = i - numero;
    resultadoSubtracao.push(`${i} - ${numero} = ${resultado}`);
    i++;
  }
  return resultadoSubtracao;
}

function multiplicar(numero) {
  let resultadoMultiplicacao = [];
  for (var i = 0; i <= 10; i++) {
    let resultado = numero * i;
    resultadoMultiplicacao.push(`${numero} x ${i} = ${resultado}`);
  }
  return resultadoMultiplicacao;
}

function dividir(numero) {
  let resultadoDivisao = [];
  let i = numero;
  while(i <= numero*10) {
    let resultado = (i / numero);
    resultadoDivisao.push(`${i} ÷ ${numero} = ${resultado}`);
    i += numero;
  }
  return resultadoDivisao;
}

//aqui criei a function calcular, que vai verificar o valor passado pelo
//usuario e impedir que ele coloque um valor maior que 10 ou igual a 0
function calcular(operacao) {
  //essa constante vai pegar o valor do usuario
  // (o valor que ele vai digitar no input que foi criado no html)
  const numeroEscolhido = Number(document.getElementById("numero").value);
  if (numeroEscolhido > 10 || numeroEscolhido === 0) {
    //exibir um alerta pedindo para inserir um valor entre 1 e 10
    alert('Por favor, insira um número dentre 1 a 10.');
    return;
  }

  // Declara uma variável para armazenar o resultado da operação
  let resultadoTabuada;

  // Estrutura de controle para determinar qual operação matemática realizar
  switch (operacao) {
    case "somar":
      // Chama a função e une os resultados em uma string com <br> para quebrar a linha
      resultadoTabuada = somar(numeroEscolhido).join("<br>");
      break;
    case "subtrair":
      resultadoTabuada = subtrair(numeroEscolhido).join("<br>");
      break;
    case "multiplicar":
      resultadoTabuada = multiplicar(numeroEscolhido).join("<br>");
      break;
    case "dividir":
      resultadoTabuada = dividir(numeroEscolhido).join("<br>");
      break;
  }
  // Seleciona o elemento HTML com o id 'tabuada'
  const tabuadaElemento = document.getElementById('tabuada');
  tabuadaElemento.innerHTML = resultadoTabuada;
}


document.addEventListener("DOMContentLoaded", function() {
  adicionarEventos();
});


function adicionarEventos() {
  const operacoes = ["somar", "subtrair", "multiplicar", "dividir"];
  
  operacoes.forEach(function(operacao) {
    document.getElementById(operacao).addEventListener("click", function() {
      calcular(operacao);
    });
  });
}


