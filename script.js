const numeroSenha = document.querySelector('.parametro-senha__texto');
const campoSenha =querySelector("campo-senha");
const chekbox = document.querySelectorALL('.checkbox');
const botoes = document.querySelectorAll('.parametro-senha__botao');
const forcaSenha = document.querySelector('.forca');
const letrasMaiusculas= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas= 'abcdefghijklmnopqrstuvwxyz';
const numeros= '0123456789';
const simbolos= '!@%*?';
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;



botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    //tamanhoSenha = tamanhoSenha-1;
    if (tamanhoSenha > 1){
        tamanhoSenha--;
        numeroSenha.textContent = tamanhoSenha;
        gerarSenha();
}

function aumentaTamanho(){
    if (tamanhoSenha < 20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}



function geraSenha() {
    let alfabeto= '';
    if (checkbox [0]. checked) {
        alfabeto=alfabeto + letrasMaiusculas;
    }

    if (checkbox [0]. checked) {
        alfabeto=alfabeto + letrasMinusculas;
    }

    if (checkbox [0]. checked) {
        alfabeto=alfabeto + numeros;
    }

    if (checkbox [0]. checked) {
        alfabeto=alfabeto + simbolos;
    }
    console.log(alfabeto);
    let senha = '';
    for (let i=0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random()*alfabeto.length;
        numeroAleatorio = Math.floor (numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
}


