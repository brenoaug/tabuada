function somar(numero) {
  let resultadoAdicao = [];
  for (var i = 0; i <= 10; i++) {
    let resultado = numero + i;
    resultadoAdicao.push(`${numero} + ${i} = ${resultado}`);
  }
  return resultadoAdicao;
}

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

function calcular(operacao) {
  const numeroEscolhido = Number(document.getElementById("numero").value);
  if (numeroEscolhido > 10 || numeroEscolhido === 0) {

    alert('Por favor, insira um número dentre 1 a 10.');
    return;
  }

  let resultadoTabuada;

  switch (operacao) {
    case "somar":
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


