// ✏️ EDITE AQUI: Escreva o seu texto de amizade entre as crases (``)
const meuTexto = `Oi, Lua! Bem tu já me conhece e sabe bem que eu não sei escrever cartinha muito menos sei expressar meus sentimentos. Mas aqui vai uma tentativa que muito provavelmente vai ficar uma merda. Quem diria que à dois anos e meio eu iria te conhecer e a gente viraria melhores amigos bem dizer irmãos né, tudo isso por causa da cabacisse de china, em pouco tempo você se tornou uma pessoa muito especial pra mim, conseguiu ser a primeira e creio que a única pessoa de fora da minha turma com quem eu realmente fiz alguma amizade e pensar que no começo eu nem queria falar com você porque você ainda tava com menino china e eu não queria dar uma de intruso nem atrapalhar o entrosamento de vocês, só que a entrosa de vocês não vingou e a gente começou a conversar e acabou criando um laço de amizade fuderoso que eu espero levar pro resto da vida. Só dois anos e meio e parece que a gente se conhece a muito mais tempo gostos musicais que se parecem muito além de que nossas mentes acabam se conectando de uma forma que eu nem sei explicar, só não na política, mas de resto tudo se conecta, nesse meio tempo foram muitas histórias, boas risadas, ótimas conversas, algumas brigas e desentendimentos por besteira, vários esporros que tu me deu por causa de mulher, quase me engoliu várias vezes mas isso que mantém nossa amizade forte e aqui vai um pedido de desculpas meu pois você se desculpou chorando pra mim e eu não respondi no mesmo nivel, com certeza as melhores conversas e os melhores momentos foram dentro do Jardim Brasil 2 ou do príncipe escutando minhas músicas e tu sempre pedindo pra colocar essas fezes que tu escuta. Apesar da gente tá meio afastado agora saiba que eu gosto muito de você, muito mesmo apesar de não falar e não demonstrar muito quero ter você por perto pro resto da vida peço perdão por não saber expressar meus sentimentos. Mas enquanto você falar comigo eu vou responder sempre e com toda certeza eu estarei disponível pra ajudar você no que estiver ao meu alcance, bem acho que é isso, ficou meio paia mas eu já expliquei o motivo no começo, desejo tudo de bom pra você nesse novo ciclo que fala né?           Só tu mesmo pra me fazer escrever uma carta, acho que nunca tinha feito um textinho assim pra ninguém foi a primeira a receber uma cartinha desse imbecil aqui e a primeira que falei sobre os sentimentos sentimentais da amizade. Vou encerrar por aqui, já tô enrolando demais. 
Te amo Lua 🫶(acho que é a primeira vez que falo isso pra tu, mas é a primeira de muitas)`;

// Variaveis de controle
let indexText = 0;
let isPlaying = false;

// 1. Efeito Máquina de Escrever
function digitarTexto() {
    const container = document.getElementById('typed-text');
    if (indexText < meuTexto.length) {
        container.textContent += meuTexto.charAt(indexText);
        indexText++;
        setTimeout(digitarTexto, 40); // Velocidade da digitação em milissegundos
    } else {
        // Mostra a caixa de pergunta ao finalizar o texto
        document.getElementById('question-box').classList.remove('hidden');
    }
}

// 2. Transição do Envelope para a Carta + Iniciar Música MP3
function abrirCarta() {
    tocarMusicaMp3();
    document.getElementById('screen-envelope').classList.add('hidden');
    document.getElementById('screen-letter').classList.remove('hidden');
    digitarTexto();
}

// 3. Função para dar Play no arquivo MP3
function tocarMusicaMp3() {
    const audio = document.getElementById('bg-music');
    audio.play().then(() => {
        isPlaying = true;
        document.getElementById('music-toggle').innerText = "🎵 Música: On";
    }).catch(error => {
        console.log("O navegador impediu o início automático, use o botão no topo.");
    });
}

// 4. Botão Manual de Ligar/Desligar Música (Topo da tela)
function toggleAudio() {
    const audio = document.getElementById('bg-music');
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        document.getElementById('music-toggle').innerText = "🎵 Música: Off";
    } else {
        audio.play();
        isPlaying = true;
        document.getElementById('music-toggle').innerText = "🎵 Música: On";
    }
}

// 5. Botão "Não" que foge do mouse/toque
function fugirBotao() {
    const btnNo = document.getElementById('btn-no');
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 50);
    
    btnNo.style.position = 'fixed';
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
}

// 6. Celebração do "Sim" com chuva de corações
function aceitouAmizade() {
    alert("Sabia que você ia aceitar! 💖✨");
    dispararParticulas();
}

// 7. Efeito de chuva de corações (Canvas)
function dispararParticulas() {
    const canvas = document.getElementById('canvas-particles');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: -20,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 3 + 2,
        opacity: Math.random()
    }));

    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p) => {
            ctx.fillStyle = `rgba(233, 30, 99, ${p.opacity})`;
            ctx.font = `${p.size}px serif`;
            ctx.fillText('❤️', p.x, p.y);
            p.y += p.speed;
        });

        if (particles.some(p => p.y < canvas.height)) {
            requestAnimationFrame(render);
        }
    }
    render();
}