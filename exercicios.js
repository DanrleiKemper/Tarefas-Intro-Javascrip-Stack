// -------------------------------------

/**
 * Função que calcula a soma de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A soma dos dois numeros
 */
function soma(a, b) {
  // @todo implementar retorno da operação aqui
  return a + b;

}

//let valorSoma = soma(1337, 3301);
//console.log('Soma: ', valorSoma);
 

/**
 * Função que calcula a multiplicação de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A multiplicação dos dois numeros
 */
function multiplicacao(a, b) {
  // @todo implementar retorno da operação aqui
  return a * b;

}

  //let valorMultiplicacao = multiplicacao(3, 11);
  //console.log('Multiplicação: ', valorMultiplicacao);

/**
 * Função que calcula a divisão de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A divisão dos dois numeros
 */
function divisao(a, b) {
  // @todo implementar retorno da operação aqui
  return a / b;
}
  //let valorDivisao = divisao(10, 2);
  //console.log('Divisão: ', valorDivisao);

/**
 * Função que calcula a subtração de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A subtração dos dois numeros
 */
function subtracao(a, b) {
  // @todo implementar retorno da operação aqui
  return a - b;
}

  //let valorSubtracao = subtracao(3301, 1337);
  //console.log('Subtracao: ', valorSubtracao);

/**
 * Função que resto da divisão de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} O resto da divisão dos dois numeros
 */
function modulo(a, b) {
  // @todo implementar retorno da operação aqui
  return a % b;
}

//let restoDivisao = modulo(15, 4);
//console.log('Resto da Divisao: ', restoDivisao);

/**
 * Função que calcula o maior número entre 2
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} O maior número
 */
function max(a, b) {
  // @todo implementar retorno da operação aqui
  if(a > b){
    return a;
  }else{
    return b;
  }
}

// -------------------------------------

/**
 * Função que concatena 2 strings utilizando template strings
 * @param {string} a - A primeira string
 * @param {string} b - A segunda string
 * @returns {string} As 2 strings concatenadas
 */
function strConcat(a, b) {
  // @todo implementar retorno da operação aqui
  return (a + " " + b);
}

let resultadoconcat = strConcat("Hello", "World");

console.log(resultadoconcat);

// --------------------------------------

/**
 * Função que implementa controle de fluxo
 * 
 * @param {number} numero - O número em questão
 * @returns {string} 
 *  - "Maior que 10" quando o número é maior que 10
 *  - "Igual a 10" quando o número é igual a 10
 *  - "Menor que 10" quando o número é menor que 10
 */
function retornaNumero(numero) {
  // @todo implementar retorno da operação aqui
  if(numero > 10){
    return "Maior que 10";
  }else if(numero == 10){
    return "Igual a 10";
  }else{
    return "Menor que 10";
  }

}

// --------------------------------------

/**
 * Função que valida se o número em questão é positivo
 * @param {number} num - Número em questão
 * @returns {boolean} Retorna true para números positivos
 */
function ehPositivo(num) {
  // @todo implementar retorno da operação aqui
  if (num > 0){
    return true;
  }else{
    return false;
  }
  
}

module.exports = 
{ 
  soma,
  multiplicacao,
  divisao,
  subtracao,
  modulo,
  max,
  strConcat,
  retornaNumero,
  ehPositivo
};
