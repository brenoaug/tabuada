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
  for (var i = numero; i <= numero + 10; i++) {
    let resultado = i - numero;
    resultadoSubtracao.push(`${i} - ${numero} = ${resultado}`);
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
  if (numeroEscolhido > 10) {
    alert('Por favor, insira um número menor ou igual a 10.');
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
  document.getElementById("somar").addEventListener("click", function() {
    calcular("somar");
  });
  document.getElementById("subtrair").addEventListener("click", function() {
    calcular("subtrair");
  });
  document.getElementById("multiplicar").addEventListener("click", function() {
    calcular("multiplicar");
  });
  document.getElementById("dividir").addEventListener("click", function() {
    calcular("dividir");
  });
}



