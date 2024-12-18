### Estrutura do Documento HTML 

O documento HTML contém a estrutura básica da página, incluindo os botões para cada operação matemática.

- O elemento `<h1>` exibe o título da página.
- O elemento `<input>` permite a entrada de números pelo usuário.
- Os elemento `<button>` representam os botões para cada operação matemática, com ids correspondentes às operações.
- O elemento `<script>` inclui o arquivo JavaScript que contém a lógica da calculadora.

### Estrutura do Documento CSS

O documento CSS define o estilo da página, incluindo a aparência dos botões e do campo de entrada.

- O seletor `body` define o estilo geral da página, como a fonte e o alinhamento do texto.
- O seletor `h1` define o estilo do título da página, como o tamanho da fonte e a cor.
- O seletor `input` define o estilo do campo de entrada, como a largura e o padding.
- O seletor `button` define o estilo dos botões, como a cor de fundo, a cor do texto e o padding.

### Estrutura do Documento script.js

O documento `script.js` contém funções JavaScript que realizam operações matemáticas básicas e exibem os resultados na tela. Abaixo está a explicação da estrutura do documento:

#### Função `somar(numero)`

- Realiza a adição do número fornecido com valores de 0 a 10.
- Utiliza um loop `for` para iterar de 0 a 10.
- Armazena os resultados em um array `resultadoAdicao` e retorna este array.

#### Função `subtrair(numero)`

- Realiza a subtração do número fornecido de valores de `numero` até `numero + 10`.
- Utiliza um loop `while` para iterar enquanto `i` for menor ou igual a `numero + 10`.
- Armazena os resultados em um array `resultadoSubtracao` e retorna este array.

#### Função `multiplicar(numero)`

- Realiza a multiplicação do número fornecido com valores de 0 a 10.
- Utiliza um loop `for` para iterar de 0 a 10.
- Armazena os resultados em um array `resultadoMultiplicacao` e retorna este array.

#### Função `dividir(numero)`

- Realiza a divisão do número fornecido por valores múltiplos de `numero` até `numero * 10`.
- Utiliza um loop `while` para iterar enquanto `i` for menor ou igual a `numero * 10`.
- Armazena os resultados em um array `resultadoDivisao` e retorna este array.

#### Função `calcular(operacao)`

- Obtém o valor inserido pelo usuário no campo de entrada com id `numero`.
- Verifica se o valor está entre 1 e 10. Caso contrário, exibe um alerta.
- Dependendo da operação selecionada (`somar`, `subtrair`, `multiplicar`, `dividir`), chama a função correspondente e exibe os resultados no elemento HTML com id `tabuada`.

#### Função `adicionarEventos()`

- Adiciona eventos de clique aos botões de operação (`somar`, `subtrair`, `multiplicar`, `dividir`).
- Quando um botão é clicado, chama a função `calcular` com a operação correspondente.

#### Evento `DOMContentLoaded`

- Quando o documento HTML é completamente carregado, chama a função `adicionarEventos` para configurar os eventos de clique nos botões.

Essa estrutura permite que o usuário insira um número e selecione uma operação matemática para ver os resultados exibidos na tela.

Texto feito pelo Copilot a apartir dos comentários no codigo.

