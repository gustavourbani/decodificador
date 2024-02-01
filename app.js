function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h2', 'Nenhuma mensagem encontrada');
exibirTextoNaTela('h3', 'Digite um texto que você deseja criptografar ou descriptografar');
exibirTextoNaTela('h1', 'Atenção: não insira caracteres especiais.');



function exibirTextoNaTelaId(tag, texto) {
  let campo = document.getElementById(tag);
  campo.innerHTML = texto;
}

document.getElementById('b1').onclick = function criptografarTexto(){
  document.getElementById('img1').setAttribute('hidden', true);
  document.querySelector('h2').setAttribute('hidden', true);
  document.querySelector('h3').setAttribute('hidden', true);
  document.getElementById('b3').removeAttribute('hidden');
  document.getElementById('p').removeAttribute('hidden');
  let textoCript = document.querySelector('textarea').value;
  let textoCriptMinusculo = textoCript.toLowerCase();
  let textoCriptMinusculoSemEspaco = textoCriptMinusculo.trim();
  let textoCriptMinusculoSemEspacoParaVetor = textoCriptMinusculoSemEspaco.split('');
  let i = 0;
  while (i < textoCriptMinusculoSemEspacoParaVetor.length) {
    if (textoCriptMinusculoSemEspacoParaVetor[i] == 'a'){
      textoCriptMinusculoSemEspacoParaVetor[i] = 'ai'
      } if (textoCriptMinusculoSemEspacoParaVetor[i] == 'e'){
        textoCriptMinusculoSemEspacoParaVetor[i] = 'enter'
          } if (textoCriptMinusculoSemEspacoParaVetor[i] == 'o'){
            textoCriptMinusculoSemEspacoParaVetor[i] = 'ober'
              } if (textoCriptMinusculoSemEspacoParaVetor[i] == 'i'){
                textoCriptMinusculoSemEspacoParaVetor[i] = 'imes'
               } if (textoCriptMinusculoSemEspacoParaVetor[i] == 'u'){
                textoCriptMinusculoSemEspacoParaVetor[i] = 'ufat'           
                 } i++;
    }
    let textoCriptMinusculoSemEspacoParaString = textoCriptMinusculoSemEspacoParaVetor.join('') 
    exibirTextoNaTelaId('p', textoCriptMinusculoSemEspacoParaString);
}

document.getElementById('b2').onclick = function descriptografarTexto(){
    document.getElementById('img1').setAttribute('hidden', true);
    document.getElementById('b3').removeAttribute('hidden');
    document.querySelector('h2').setAttribute('hidden', true);
    document.querySelector('h3').setAttribute('hidden', true);
    document.getElementById('p').removeAttribute('hidden');
    textoDes = document.querySelector('textarea').value;
    let textoDesMinusculo = textoDes.toLowerCase();
    let textoDesMinusculoSemEspaco = textoDesMinusculo.trim();
    let textoOBER = textoDesMinusculoSemEspaco.replace(/ober/g,"o");
    let textoAI = textoOBER.replace(/ai/g,"a");
    let textoENTER = textoAI.replace(/enter/g,"e");
    let textoIMES = textoENTER.replace(/imes/g,"i");
    let textoUFAT = textoIMES.replace(/ufat/g,"u"); 

    exibirTextoNaTelaId('p', textoUFAT);

    
}

function copiarTexto(){
  let copiar = document.getElementById("p").textContent;
  console.log(copiar);
  navigator.clipboard.writeText(copiar);
}