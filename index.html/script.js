//Um programa em JavaScript que apresente uma caixa de alerta para o usuário com uma informação qualquer.
alert("Trabalho de DDM");





//Um  script em que o usuário clicará com o botão e em seguida uma mensagem de alerta será apresentada com uma mensagem qualquer.
document.addEventListener('DOMContentLoaded', function () {
document.querySelector('button').addEventListener('click', function () {
alert('Escreva um programa em JavaScript que apresente uma caixa de alerta para o usuário com uma informação qualquer.');
});
});







function mudarCor() {
var botao = document.getElementById("my bottom");
botao.style.backgroundColor = "#9c93ee"; // Nova cor quando o mouse está sobre o botão
}
 








//Neste exemplo, a função contarClique é definida como uma função literal atribuída a uma variável.
var contadorDeCliques = 0;
function contarClique() {
contadorDeCliques++;
document.getElementById("contador").innerText = contadorDeCliques;
}
 








//Neste exemplo, um input de texto é fornecido, e quando o conteúdo desse input muda, o evento onchange é acionado.
//Isso chama a função atualizarValor(), que atualiza o texto de um <span> com o ID "valorAtual" para refletir o novo valor do input.
function atualizarValor() {
var valor = document.getElementById("meuInput").value;
document.getElementById("valorAtual").innerText = valor;
}









//Esta função converterParaMaiuscula recebe uma string como parâmetro e retorna a mesma string com todas as letras convertidas para maiúsculas usando o método toUpperCase().
function converterParaMaiuscula(string) {
return string.toUpperCase();
}
       









function converter() {
var texto = document.getElementById("texto").value;
var textoConvertido = converterParaMaiuscula(texto);
document.getElementById("textoConvertido").innerText = textoConvertido;
}
       
function converterParaMaiuscula(string) {
return string.toUpperCase();
}
 
 









//document.getElementById();
//Quando o botão é clicado, a função mudarTexto() é acionada. Dentro dessa função, document.getElementById("meuParagrafo") é usado para obter o elemento de parágrafo pelo seu ID. 
//Em seguida, o texto desse parágrafo é alterado para "O texto foi alterado!" usando a propriedade textContent.
    
function mudarTexto() {
// Obtém o elemento pelo ID
var paragrafo = document.getElementById("meuParagrafo");
        
// Muda o texto do parágrafo
paragrafo.textContent = " Esse é um exemplo do document.getElementById();!";
}










//document.getElementsByTagName();
// temos três elementos <p> (parágrafos). Quando o botão é clicado, a função realcarParagrafos() é acionada. 
//Dentro dessa função, document.getElementsByTagName("p") é usado para selecionar todos os elementos de parágrafo na página.
function realcarParagrafos() {

// Obtém todos os elementos de parágrafo
var paragrafos = document.getElementsByTagName("p");
        
// Percorre todos os parágrafos e aplica um estilo de realce
for (var i = 0; i < paragrafos.length; i++) {
paragrafos[i].style.backgroundColor = "white";
}
}










//document.getElementsByClassName();
//Neste exemplo, temos três elementos <p> (parágrafos). Dois desses parágrafos possuem a classe "realcar". 
//Quando o botão é clicado, a função realcarParagrafos() é acionada. Dentro dessa função, document.getElementsByClassName("realcar") é usado para selecionar todos os elementos com a classe "realcar" na página.
function realcarParagrafos() {
    // Obtém todos os elementos com a classe "realcar"
    var paragrafosRealcados = document.getElementsByClassName("realcar");

    // Percorre todos os parágrafos com a classe "realcar" e aplica um estilo de realce
    for (var i = 0; i < paragrafosRealcados.length; i++) {
        paragrafosRealcados[i].style.backgroundColor = "blue";
    }
}









function realcarParagrafos() {
    // Seleciona todos os parágrafos com a classe "paragrafo"
    var paragrafos = document.querySelectorAll(".paragrafo");

    // Itera sobre cada parágrafo e aplica um estilo de realce
    paragrafos.forEach(function(paragrafo) {
        paragrafo.style.backgroundColor = "blue";
    });
}









//8
function somarValores(){
    var s1 = document.getElementById("txt1").value;
    var s2 = document.getElementById("txt2").value;
    var s3 = parseInt(s1)+parseInt(s2);
    alert(s3);
}


// Obtendo todos os elementos 'input' dentro do formulário
const inputsFormulario = document.getElementById("meuFormulario").getElementsByTagName("input");

// Iterando sobre os elementos 'input' e exibindo seus tipos
for (let i = 0; i < inputsFormulario.length; i++) {
    console.log(`Tipo do campo ${i + 1}: ${inputsFormulario[i].type}`);
}