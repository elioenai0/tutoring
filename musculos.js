function apareceNavegador(){
    const botaoHamb = document.getElementById('hamb')
    const navegador = document.getElementsByTagName('nav')[0]


    if(navegador.style.display == 'none'){

        navegador.style.display = 'block'
    }else{
        navegador.style.display = 'none'
    }
}

var endereçoimgs = [
    '1.png',
    '2.jpg',
    '3.png',
]
var tela = document.getElementById('tela')

setInterval(function(){tela.style.backgroundImage = `url(${endereçoimgs[0]})`},3000)
setInterval(function(){tela.style.backgroundImage = `url(${endereçoimgs[1]})`},6000)
setInterval(function(){tela.style.backgroundImage = `url(${endereçoimgs[2]})`},12000)


//NÃO ESTÁ FUNCIONANDO
var rodape = document.createElement('footer');
rodape.setAttribute('textContent','Site desenvolvido pelo Grupo Elioenai');
var corpoatual = document.getElementsByTagName("body")[0]


var elementoA = document.getElementById('c9')
elementoA.addEventListener('click',function(){
    var caminho = 'aula1.html'
    var win = window.open(caminho, '_self');
    win.focus();
})

var elementoA = document.getElementById('logo')
elementoA.addEventListener('click',function(){
    var caminho = 'index.html'
    var win = window.open(caminho, '_self');
    win.focus();
})


function login(){
    const elementodeinteresse = document.getElementById('teladelogin');
    if(elementodeinteresse.style.display == 'block'){
        elementodeinteresse.style.display = 'none';
    }else{
        elementodeinteresse.style.display = 'block'
    }
}
var divDeCadastro = document.getElementById('preto');
        
function cadastra(){
    window.scroll(10,10)
    divDeCadastro.style.display = 'block';
}
function fecharDiv(){
    divDeCadastro.style.display = 'none'
}

function abra1(){
    var url = "cursos/musica";
    var win = window.open(url, '_self');
    win.focus();
} 