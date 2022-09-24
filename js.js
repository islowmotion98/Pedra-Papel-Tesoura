let escolhaCPU = undefined;
let minhaEscola = undefined;
let vencer = "You Win";
let perder = "You Loss";
let empate = "draw";
let pontos = 0;

function closeRules(){
    document.getElementById('body').classList.add('inicio-show');
    document.getElementById('body').classList.remove('rules-show');
    document.getElementById('body').classList.remove('result-show');
}

function showRules(){
    document.getElementById('body').classList.remove('inicio-show');
    document.getElementById('body').classList.add('rules-show');
}

function escolherJagada(valor){
    document.getElementById('resul').classList.add('disable');
    const demoraContagem = setTimeout(teste, 0);
    const demoraContage2 = setTimeout(teste2, 1000);
    const demoraContagem3 = setTimeout(teste3, 2000);
    document.getElementById('body').classList.remove('inicio-show');
    document.getElementById('body').classList.add('result-show');
    escolhaCPU = parseInt(Math.random(3) * 3);
    minhaEscola = valor;
    document.getElementById('segundo-jogador').classList.remove('circulo-mao-grande','circulo-tesoura-grande','circulo-papel-grande');
    document.getElementById('primeiro-jogador').classList.remove('circulo-mao-pequena','circulo-tesoura-pequena','circulo-papel-pequena');
    document.getElementById('segundo-cpu').classList.remove('circulo-mao-grande','circulo-tesoura-grande','circulo-papel-grande');
    document.getElementById('primeiro-cpu').classList.remove('circulo-mao-pequena','circulo-tesoura-pequena','circulo-papel-pequena');
    document.getElementById('imagem').setAttribute('src', '');
    document.getElementById('imagem-cpu').setAttribute('src', '');
    document.getElementById('minhaEscolh').classList.remove('toggle');
    document.getElementById('cpuEscolha').classList.remove('toggle');
    switch(minhaEscola){
        case 0:
            document.getElementById('segundo-jogador').classList.add('circulo-mao-grande');
            document.getElementById('primeiro-jogador').classList.add('circulo-mao-pequena');
            document.getElementById('imagem').setAttribute('src', './images/icon-rock.svg');
            break;
        case 1:
            document.getElementById('segundo-jogador').classList.add('circulo-tesoura-grande');
            document.getElementById('primeiro-jogador').classList.add('circulo-tesoura-pequena');
            document.getElementById('imagem').setAttribute('src', './images/icon-scissors.svg');
            break;
        case 2:
            document.getElementById('segundo-jogador').classList.add('circulo-papel-grande');
            document.getElementById('primeiro-jogador').classList.add('circulo-papel-pequena');
            document.getElementById('imagem').setAttribute('src', './images/icon-paper.svg');
            break;
    }
}

function teste(){
    document.getElementById('contagem').classList.add('contagem-anima')
    document.getElementById('contagem').innerHTML = 3;
}
function teste2(){
    document.getElementById('contagem').innerHTML = 2;
}
function teste3(){
    setTimeout(limpar,750);
    document.getElementById('contagem').innerHTML = 1;
}
function limpar(){
    document.getElementById('contagem').innerHTML = "";
    setTimeout(resultado(minhaEscola, escolhaCPU),3000)
}

function resultado(valor, escolhaCPU){
    console.log(valor);
    switch(valor){
        case 0:
            document.getElementById('segundo-jogador').classList.add('circulo-mao-grande');
            document.getElementById('primeiro-jogador').classList.add('circulo-mao-pequena');
            document.getElementById('imagem').setAttribute('src', './images/icon-rock.svg');
            break;
        case 1:
            document.getElementById('segundo-jogador').classList.add('circulo-tesoura-grande');
            document.getElementById('primeiro-jogador').classList.add('circulo-tesoura-pequena');
            document.getElementById('imagem').setAttribute('src', './images/icon-scissors.svg');
            break;
        case 2:
            document.getElementById('segundo-jogador').classList.add('circulo-papel-grande');
            document.getElementById('primeiro-jogador').classList.add('circulo-papel-pequena');
            document.getElementById('imagem').setAttribute('src', './images/icon-paper.svg');
            break;
    }
    switch(escolhaCPU){
        case 0:
            document.getElementById('segundo-cpu').classList.add('circulo-mao-grande');
            document.getElementById('primeiro-cpu').classList.add('circulo-mao-pequena');
            document.getElementById('imagem-cpu').setAttribute('src', './images/icon-rock.svg');
            break;
        case 1:
                document.getElementById('segundo-cpu').classList.add('circulo-tesoura-grande');
                document.getElementById('primeiro-cpu').classList.add('circulo-tesoura-pequena');
                document.getElementById('imagem-cpu').setAttribute('src', './images/icon-scissors.svg');
                break;
        case 2:
                document.getElementById('segundo-cpu').classList.add('circulo-papel-grande');
                document.getElementById('primeiro-cpu').classList.add('circulo-papel-pequena');
                document.getElementById('imagem-cpu').setAttribute('src', './images/icon-paper.svg');
                break;
    }
    document.getElementById('resul').classList.remove('disable');
    if (valor == escolhaCPU){
        document.getElementById('title-res').innerHTML = empate;
    }else if (valor == 1 && escolhaCPU == 2 || valor == 0 && escolhaCPU == 1 || valor == 2 && escolhaCPU == 0 ){
        document.getElementById('title-res').innerHTML = vencer;
        document.getElementById('minhaEscolh').classList.add('toggle');
        pontos = pontos + 1;
        document.getElementById('score').innerHTML = pontos;

    } else if (valor == 0 && escolhaCPU == 2 || valor == 1 && escolhaCPU == 0 || valor == 2 && escolhaCPU == 1){
        document.getElementById('title-res').innerHTML = perder;
        document.getElementById('cpuEscolha').classList.add('toggle');
        if (pontos == 0){
            document.getElementById('score').innerHTML = pontos;
        } else{
            pontos = pontos - 1;
            document.getElementById('score').innerHTML = pontos;
        }
    }
}