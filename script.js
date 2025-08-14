const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é uma aluna nova em um colégio. Você precisa achar sua sala de aula. Você:",
        alternativas: [
            {
                texto: "Pergunta para um menino no corredor.",
                afirmacao: "O menino te ajuda a achar a sua sala e descobri que são da mesma turma e ele se apresenta, o seu nome é Josh.",
            },
            {
                texto: "Você tenta achar sozinha.",
                afirmacao: "Você demora para achar sua sala e leva um esporro do professor.",
            }
        ]
    },
    {
        enunciado: "É intervalo. Você precisa de um lugar pra se sentar. Com quem você senta?",
        alternativas: [
            {
                texto: "Uma menina comendo sozinha.",
                afirmacao: "A menina que você conheceu é legal e simpática, vocês viram amigas.",
            },
            {
                texto: "Grupo de meninas.",
                afirmacao: "O grupo de meninas te estranham e te excluem. Você fica com fama de esquisita entre elas.",
            }
        ]
    },
    {
        enunciado: "Passou um tempo e você se acostumou a sua nova escola. Agora o professor deu um trabalho em duplas e já montou os pares, e você fica com o Josh. Como você reagiu? ",
        alternativas: [
            {
                texto: "Você vai falar com ele.",
                afirmacao: "Sobre o trabalho que o professor passou, você tem a iniciativa de ir lá falar com Josh (sua dupla) sobre o trabalho dado e você sugere de fazerem o trabalho na casa dele, e ele concorda. Você não lembrava dele ser tão gentil e bonito.",
            },
            {
                texto: "Você espera ele vir falar com você primeiro.",
                afirmacao: "Sobre o trabalho que o professor passou, você esperou Josh vir falar com você. Ele acha que você é bem tímida e vem falar com você. Marcaram de fazer o trabalho na casa dele e ele acha você muito quieta.",
            }
        ]
    },
    {
        enunciado: "É a data marcada. Você vai até a casa de Josh e fazem o trabalho. Após terminarem, decidem assistir um filme. Você percebe que ele não para de te encara. Como você reage?",
        alternativas: [
            {
                texto: "Você tenta ignorar.",
                afirmacao: "Na casa de Josh, após fazer o trabalho, ele continua te encarando. Você decide tentar ignorar e ele continua te encarando e tenta puxar um assunto e vocês começam a conversar. Você se sente atraida por ele e se ele teria algum interesse em você.",
            },
            {
                texto: "O encara de volta na mesma intensidade.",
                afirmacao: "Na casa de Josh, após fazer o trabalho, ele continua te encarando. Você decide encarar de volta... Vocês se encaram por uns segundos e sentem a química. Ele se aproxima e vocês se beijam. Você fica preocupada que ele só te beijou por impulso enqunato você se sente atraida por ele de verdade.",
            }
        ]
    },
    {
        enunciado: "Eu gostaria de te perguntar algo, mas tenho medo de você me achar estranho.' Josh diz olhando para você. 'Pode perguntar' Você responde. 'Desde que te vi no corredor percebi o quão bonita você é. E depois de conversar com você, reparei que você também é muito legal. Quer ir num encontro comigo?' Ele diz tímido. O que você faz? ",
        alternativas: [
            {
                texto: "Você fica nervosa e enrola ele.",
                afirmacao: "Josh te chama para sair e você o enrola. Ele fica confuso e você não o responde por um tempo. Ele acaba perdendo o interesse.",
            },
            {
                texto: "Você aceita.",
                afirmacao: "Ele te chama para sair e você aceita. Josh fica contente e marcam o encontro. Tudo ocorre bem e vocês começam um relacionamento!",
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
