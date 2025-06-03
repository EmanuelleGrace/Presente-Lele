/* =======================================================================
 * SCRIPT PRINCIPAL DO SITE - COMENTÁRIOS EXPLICATIVOS
 * =======================================================================
 * Fala Grace! Eu criei este script para calcular e exibir o tempo de relacionamento de vocês.
 * Quero explicar em detalhes tudo que fiz para que você entenda como funciona.
 * 
 * Aqui estão as principais funções que implementei para você:
 * 
 * 1. Cálculo de tempo de relacionamento
 *    - Mostra dias, horas, minutos e segundos no contador visual
 *    - Usa a data correta de início do relacionamento de vocês
 *    - Atualiza em tempo real para mostrar a duração exata
 * 
 * 2. Efeitos visuais românticos
 *    - Animações suaves nas fotos de vocês
 *    - Corações flutuantes pelo site
 *    - Destaque de texto com efeitos visuais
 * 
 * 3. Suporte para dispositivos móveis
 *    - Otimizações de desempenho para que vocês possam acessar de qualquer lugar
 *    - Interação por toque para melhor experiência em smartphones e tablets
 *    - Ajustes de layout responsivos para diferentes orientações de tela
 * =======================================================================
 */

// Defini a data de início do relacionamento de vocês para calcular o tempo juntas
// Usei o formato ISO (YYYY-MM-DDThh:mm:ss) para garantir precisão no cálculo de tempo
// A data 2 de julho de 2024 às 23:59 foi escolhida como marco inicial do relacionamento de vocês
const dataInicio = new Date("2024-07-02T23:59:00");

// Criei esta função para adicionar animações às fotos de vocês quando a página carrega
// Queria que as fotos tivessem vida e movimento para tornar a experiência mais especial
// Cada foto entra na tela com um efeito flutuante suave, criando uma sensação de leveza
function animarFotos() {
    // Aqui busco todos os containers de fotos que criei no HTML usando seletores CSS
    // Isso me permite manipular todas as fotos de vocês de uma só vez
    const fotoContainers = document.querySelectorAll('.foto-container');
    
    // Para cada container de foto, aplico animações e interatividade
    // O parâmetro 'index' me dá a posição de cada foto na lista, começando do 0
    fotoContainers.forEach((container, index) => {
        // Adiciono um pequeno atraso para cada foto, criando um efeito cascata
        // Multiplico o índice por 300ms para que cada foto entre em momentos diferentes
        // Isso cria um efeito visual mais agradável do que todas entrando ao mesmo tempo
        setTimeout(() => {
            container.classList.add('float');
        }, index * 300);
        
        // Adiciono evento de hover para destacar a foto quando o mouse passa por cima
        // Isso torna a galeria de vocês mais interativa e divertida de explorar
        container.addEventListener('mouseenter', () => {
            // Verifico se o container é um HTMLElement antes de modificar suas propriedades
            // Isso é uma boa prática para evitar erros no JavaScript
            if (container instanceof HTMLElement) {
                container.style.zIndex = '10';  // Valor alto de z-index traz a foto para frente
            }
        });
        
        // Quando o mouse sai da foto, ela volta ao seu estado normal
        // Isso garante que a interface fique organizada quando não estiver em uso
        container.addEventListener('mouseleave', () => {
            // Mesma verificação de tipo para garantir compatibilidade em todos os navegadores
            if (container instanceof HTMLElement) {
                container.style.zIndex = '3';  // Valor menor de z-index coloca a foto de volta na camada normal
            }
        });
    });
}

// Desenvolvi esta função para calcular e exibir o tempo que vocês estão juntas
// Este é o coração do site, pois mostra exatamente quanto tempo se passou desde
// o início do relacionamento de vocês, atualizado em tempo real a cada segundo
function atualizaRelogio() {
    // Capturo a data e hora atual para comparar com a data de início do relacionamento de vocês
    const agora = new Date();
    
    // Converto ambas as datas para milissegundos para poder calcular a diferença
    // getTime() retorna o tempo em milissegundos desde 01/01/1970 (padrão Unix)
    // Isso permite fazer cálculos precisos entre datas diferentes
    const diferenca = agora.getTime() - dataInicio.getTime(); // Tempo desde o início do relacionamento de vocês
    
    // Calculo o tempo total em segundos usando valor absoluto
    // Math.abs garante que o resultado seja sempre positivo, mesmo se a data de início for futura
    // Math.floor arredonda para baixo para ter um número inteiro de segundos
    let segundos = Math.abs(Math.floor(diferenca / 1000));
    
    // Agora converto os segundos totais em unidades mais compreensíveis
    // Primeiro calculo os dias completos (24 horas = 86400 segundos)
    const dias = Math.floor(segundos / (60 * 60 * 24));
    
    // Depois calculo as horas restantes após remover os dias completos
    // Uso o operador % (módulo) para obter o resto da divisão
    const horas = Math.floor((segundos % (60 * 60 * 24)) / (60 * 60));
    
    // Em seguida, os minutos restantes após remover horas completas
    const minutos = Math.floor((segundos % (60 * 60)) / 60);
    
    // E finalmente, os segundos que sobram após remover minutos completos
    const segundosRestantes = segundos % 60;
    
    // Busco o elemento HTML onde vou mostrar o contador para vocês
    // Uso o ID 'relogio' que defini no HTML para encontrar o elemento correto
    const relogioElement = document.getElementById("relogio");
    
    // Sempre verifico se o elemento existe antes de tentar atualizá-lo
    // Isso é uma boa prática para evitar erros caso a estrutura da página mude
    if (relogioElement) {
        // Aqui crio a estrutura HTML do contador usando template strings do JavaScript
        // Isso me permite inserir valores dinâmicos diretamente no HTML de forma elegante
        relogioElement.innerHTML = `
            <!-- Container principal que agrupa todos os elementos do contador -->
            <div class="tempo-container">
                <!-- Componente para exibir os dias -->
                <div class="tempo-item">
                    <!-- Uso padStart(2, '0') para garantir que sempre tenha 2 dígitos (ex: 01, 02...) -->
                    <span class="tempo-valor">${dias.toString().padStart(2, '0')}</span>
                    <span class="tempo-label">dias</span>
                </div>
                <!-- Componente para exibir as horas -->
                <div class="tempo-item">
                    <span class="tempo-valor">${horas.toString().padStart(2, '0')}</span>
                    <span class="tempo-label">horas</span>
                </div>
                <!-- Componente para exibir os minutos -->
                <div class="tempo-item">
                    <span class="tempo-valor">${minutos.toString().padStart(2, '0')}</span>
                    <span class="tempo-label">min</span>
                </div>
                <!-- Componente para exibir os segundos, que mudam a cada atualização -->
                <div class="tempo-item">
                    <span class="tempo-valor">${segundosRestantes.toString().padStart(2, '0')}</span>
                    <span class="tempo-label">seg</span>
                </div>
            </div>
        `;
    }
}

// Criei esta função para adicionar um efeito romântico de corações flutuantes na tela
// Queria dar um toque especial que representasse o amor de vocês de forma visual e divertida
// Este efeito cria uma atmosfera romântica e dinâmica para a página
function adicionarCoracoes() {
    // Busco o container principal onde vou adicionar os corações
    // 'Projeto-lele' é o ID do elemento principal que contém todo o conteúdo do site
    const projetoLele = document.getElementById('Projeto-lele');
    
    // Verifico se o elemento existe antes de continuar para evitar erros
    // Essa é uma boa prática de programação defensiva que evita problemas
    if (!projetoLele) return;
    
    // Decidi criar 15 corações com propriedades aleatórias para um efeito mais natural
    // Cada coração terá tamanho, posição e duração diferentes, simulando um ambiente romântico
    for (let i = 0; i < 15; i++) {
        // Uso setTimeout para criar os corações gradualmente, não todos de uma vez
        setTimeout(() => {
            // Crio um novo elemento div para representar o coração
            const coracao = document.createElement('div');
            
            // Aplico classes para estilo e animação
            // Uso a biblioteca Animate.css para ter efeitos prontos e bonitos
            // O efeito fadeInUp faz o coração surgir de baixo para cima com fade
            coracao.className = 'coracao animate__animated animate__fadeInUp';
            
            // Defino o conteúdo como um emoji de coração vermelho
            // Emojis são ótimos para este tipo de efeito pois são leves e escaláveis
            coracao.innerHTML = '❤️';
            
            // Dou um tamanho aleatório para cada coração
            // Escolhi valores entre 10px e 40px para ter uma boa variação de tamanhos
            // Math.random() gera um número entre 0 e 1, que multiplico e somo para obter o intervalo desejado
            const tamanho = Math.random() * 30 + 10; // entre 10px e 40px
            coracao.style.fontSize = `${tamanho}px`;
            
            // Posiciono cada coração em um local aleatório da tela
            // Uso porcentagens para que funcione bem em qualquer tamanho de tela que vocês acessarem
            const posX = Math.random() * 90 + 5; // entre 5% e 95% da largura
            const posY = Math.random() * 90 + 5; // entre 5% e 95% da altura
            coracao.style.left = `${posX}%`;
            coracao.style.top = `${posY}%`;
            
            // Defino uma duração aleatória para a animação de cada coração
            // Isso cria um movimento mais natural e menos robótico na página
            const duracao = Math.random() * 5 + 3; // entre 3s e 8s
            coracao.style.animationDuration = `${duracao}s`;
            
            // Adiciono o coração à página para que ele apareça na tela
            projetoLele.appendChild(coracao);
            
            // Programo a remoção do coração após a animação terminar
            // Isso evita acumular elementos na página e deixar o site lento para vocês
            setTimeout(() => {
                coracao.remove();
            }, duracao * 1000); // Converto a duração de segundos para milissegundos
        }, i * 2000); // Adiciono um novo coração a cada 2 segundos para criar um fluxo contínuo
    }
}

// Criei esta função para dar um efeito especial ao texto principal de amor entre vocês
// Queria que a mensagem romântica tivesse um brilho suave que chamasse atenção
function destacarTextoAmor() {
    // Busco o elemento com a classe 'destaque' que contém a mensagem especial de vocês
    // Uso querySelector que é um método moderno para selecionar elementos por seletores CSS
    const destaque = document.querySelector('.destaque');
    
    // Verifico se o elemento existe antes de aplicar o efeito
    // Isso evita erros caso a estrutura do HTML seja modificada no futuro
    if (destaque) {
        // Adiciono a classe 'glow' que aplica o efeito de brilho definido no CSS
        // Este efeito cria uma aura suave ao redor do texto, destacando-o na página
        // O CSS dessa classe tem animações que fazem o texto pulsar sutilmente
        destaque.classList.add('glow');
    }
}

// Criei esta função como o maestro de todas as animações e efeitos visuais da página
// Ela coordena a sequência e o timing de cada elemento
function inicializarEfeitos() {
    // Primeiro, programo a animação do título para começar após 1 segundo
    // Esse pequeno atraso é proposital para que vocês vejam a página carregar e depois
    // o título ganhar vida com um efeito de batimento cardíaco (heartBeat)
    setTimeout(() => {
        // Busco o elemento de título pelo ID
        const titulo = document.getElementById('titulo');
        // Verifico se o elemento existe antes de aplicar as animações
        if (titulo) {
            // Adiciono as classes da biblioteca Animate.css
            // 'animate__animated' é a classe base necessária para todas as animações
            // 'animate__heartBeat' cria um efeito de pulsação como um coração batendo
            titulo.classList.add('animate__animated', 'animate__heartBeat');
        }
    }, 1000); // 1000ms = 1 segundo de atraso
    
    // Inicio as outras funções em uma ordem específica para criar uma experiência fluida
    // Primeiro as fotos começam a flutuar suavemente
    animarFotos();
    
    // Em seguida, destaco o texto de amor para chamar atenção para a mensagem especial
    destacarTextoAmor();
    
    // Por último, adiciono os corações flutuantes após 5 segundos
    // Este atraso maior dá tempo para vocês apreciarem os outros elementos primeiro
    // e depois serem surpreendidos com os corações aparecendo gradualmente
    setTimeout(adicionarCoracoes, 5000); // 5000ms = 5 segundos de atraso
}

// Desenvolvi esta função pensando na experiência de vocês em dispositivos móveis
// Queria garantir que o site funcionasse bem mesmo em celulares ou tablets
// para que vocês possam acessá-lo de qualquer lugar
function otimizarParaDispositivos() {
    // Primeiro, verifico se o dispositivo é móvel usando duas estratégias:
    // 1. Checando se a largura da tela é menor ou igual a 768px (tamanho de tablet/celular)
    // 2. Verificando se o dispositivo tem suporte a eventos de toque (touchscreen)
    // Isso me dá uma detecção mais precisa do que apenas verificar o tamanho da tela
    const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
    
    // Se for um dispositivo móvel, aplico otimizações específicas
    if (isMobile) {
        // Primeira otimização: reduzir a quantidade de corações animados
        // Muitos elementos animados podem deixar o celular de vocês lento ou esquentar
        // Então limito a apenas 5 corações em vez dos 15 originais
        const coracoes = document.querySelectorAll('.coracao');
        if (coracoes.length > 5) {
            // Remove todos os corações além dos 5 primeiros
            for (let i = 5; i < coracoes.length; i++) {
                // Verifico se o elemento existe antes de removê-lo para evitar erros
                if (coracoes[i]) {
                    coracoes[i].remove();
                }
            }
        }
        
        // Segunda otimização: simplificar as animações em geral
        // Busco todos os elementos que têm animações aplicadas
        document.querySelectorAll('.animate__animated').forEach(el => {
            // Mantenho apenas as animações mais importantes para a experiência
            // O batimento cardíaco do título e o fade in são essenciais para o conceito
            // As outras animações são removidas para melhorar a performance no celular de vocês
            if (!el.classList.contains('animate__heartBeat') && 
                !el.classList.contains('animate__fadeIn')) {
                el.classList.remove('animate__animated');
            }
        });
    }
}

// Criei esta função especialmente para quando vocês acessarem o site pelo celular
// Queria que a experiência fosse tão especial em dispositivos touch quanto em computadores
// Isso permite que vocês interajam com as fotos de forma intuitiva em qualquer dispositivo
function adicionarSuporteToque() {
    // Busco todos os containers de fotos para adicionar interatividade de toque
    // Isso permite que vocês toquem nas fotos para destacá-las quando estiverem no celular
    const fotoContainers = document.querySelectorAll('.foto-container');
    
    // Para cada container de foto, adiciono um comportamento especial para toque
    fotoContainers.forEach(container => {
        // Adiciono um detector de evento que é acionado quando vocês tocam na foto
        // 'touchstart' é o evento disparado quando o dedo toca a tela do celular
        container.addEventListener('touchstart', function(e) {
            // Previno o comportamento padrão do navegador (como zoom ou scroll)
            // Isso garante que apenas meu efeito personalizado seja aplicado
            e.preventDefault();
            
            // Primeiro, retorno todas as fotos ao tamanho normal
            // Isso garante que apenas a foto que vocês tocaram será ampliada
            fotoContainers.forEach(c => {
                // Verifico se é um elemento HTML válido antes de modificar
                if (c instanceof HTMLElement) {
                    // Restauro a escala original (tamanho 100%)
                    c.style.transform = 'scale(1)';
                    // Coloco em uma camada inferior (z-index baixo)
                    c.style.zIndex = '1';
                }
            });
            
            // Agora amplio a foto específica que vocês tocaram
            // Isso cria um efeito de destaque para a foto selecionada
            if (container instanceof HTMLElement) {
                // Aumento em 20% o tamanho da foto (escala 1.2)
                container.style.transform = 'scale(1.2)';
                // Trago para frente (z-index alto) para sobrepor outras fotos
                container.style.zIndex = '10';
                
                // Programo para que a foto volte ao normal após 2 segundos
                // Isso cria uma experiência temporária que não exige que vocês
                // precisem tocar novamente para desfazer o zoom
                setTimeout(() => {
                    container.style.transform = 'scale(1)';
                    container.style.zIndex = '1';
                }, 2000); // 2000ms = 2 segundos
            }
        });
    });
    
    // Adicionei um recurso especial para criar corações quando vocês tocam na tela
    // Isso torna a experiência móvel ainda mais interativa
    document.addEventListener('touchend', function(e) {
        // Verifico se o evento de toque tem um elemento válido como alvo
        // Isso evita erros em navegadores ou dispositivos com comportamentos diferentes
        if (e.target && e.target instanceof Element) {
            // Verifico se o toque não foi em uma foto para evitar conflitos
            // Se vocês tocarem em uma foto, ela já tem o efeito de ampliar
            // Então só crio corações quando tocarem em outras áreas da tela
            if (!e.target.closest('.foto-container')) {
                // Pego as coordenadas exatas do toque na tela
                // changedTouches[0] contém as informações do último dedo que tocou a tela
                const touch = e.changedTouches[0];
                // Chamo a função que cria um coração exatamente onde vocês tocaram
                criarCoracaoNoToque(touch.clientX, touch.clientY);
            }
        }
    });
}

// Desenvolvi esta função para criar um coração exatamente onde vocês tocam na tela
// É como se vocês pudessem deixar uma marca de amor em qualquer lugar da página
function criarCoracaoNoToque(x, y) {
    // Busco o container principal onde vou adicionar o coração
    // Uso o mesmo container 'Projeto-lele' para manter a consistência com os outros corações
    const projetoLele = document.getElementById('Projeto-lele');
    
    // Verifico se o container existe antes de continuar
    // Essa verificação defensiva evita erros caso a estrutura da página mude
    if (!projetoLele) return;
    
    // Crio um novo elemento div para o coração
    const coracao = document.createElement('div');
    
    // Aplico as mesmas classes de animação que usei nos outros corações
    // Isso mantém uma experiência visual consistente em todo o site
    coracao.className = 'coracao animate__animated animate__fadeInUp';
    
    // Defino o conteúdo como um emoji de coração vermelho
    coracao.innerHTML = '❤️';
    
    // Para dispositivos móveis, uso um tamanho um pouco menor que nos corações automáticos
    // Isso melhora a performance e evita que os corações fiquem muito grandes na tela pequena
    const tamanho = Math.random() * 20 + 10; // entre 10px e 30px
    coracao.style.fontSize = `${tamanho}px`;
    
    // Posiciono o coração exatamente nas coordenadas onde vocês tocaram
    // Uso 'position: fixed' para que o coração fique fixo na posição mesmo se a página rolar
    coracao.style.position = 'fixed';
    coracao.style.left = `${x}px`;  // Coordenada horizontal do toque
    coracao.style.top = `${y}px`;   // Coordenada vertical do toque
    
    // Centralizo o coração exatamente no ponto de toque
    // O translate(-50%, -50%) move o elemento para que seu centro fique na posição do toque
    coracao.style.transform = 'translate(-50%, -50%)';
    
    // Defino uma duração mais curta para a animação em dispositivos móveis
    // Isso melhora a performance e evita acumular muitos elementos na tela
    const duracao = Math.random() * 3 + 2; // entre 2s e 5s
    coracao.style.animationDuration = `${duracao}s`;
    
    // Adiciono o coração à página para que ele apareça na tela de vocês
    projetoLele.appendChild(coracao);
    
    // Programo a remoção do coração após a animação terminar
    // Isso evita acumular elementos na página e deixar o site lento
    setTimeout(() => {
        coracao.remove();
    }, duracao * 1000); // Converto a duração de segundos para milissegundos
}

// Criei esta função para garantir que o site fique bonito em qualquer orientação de tela
// É importante que vocês possam ver o site tanto na vertical quanto na horizontal
// Especialmente em celulares, onde a mudança de orientação é comum
function ajustarOrientacao() {
    // Primeiro, detecto qual é a orientação atual da tela
    // Uma tela está em modo paisagem (landscape) quando a largura é maior que a altura
    const isLandscape = window.innerWidth > window.innerHeight;
    
    // Também verifico se é um dispositivo móvel usando os mesmos critérios anteriores
    // Isso é importante porque os ajustes são diferentes para celulares e computadores
    const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
    
    // Se for um dispositivo móvel E estiver em modo paisagem (horizontal)
    // preciso fazer ajustes especiais para que tudo caiba na tela
    if (isMobile && isLandscape) {
        // O principal desafio em celulares na horizontal é o espaço vertical limitado
        // Então ajusto o container de mensagem para ter uma altura máxima e barra de rolagem
        document.querySelectorAll('.mensagem-container').forEach(el => {
            // Sempre verifico o tipo do elemento antes de modificar propriedades
            // Isso é uma boa prática para evitar erros em diferentes navegadores
            if (el instanceof HTMLElement) {
                // Limito a altura da mensagem para 150px para não ocupar toda a tela
                el.style.maxHeight = '150px';
                // Adiciono uma barra de rolagem para que vocês possam ler todo o texto
                el.style.overflowY = 'auto';
            }
        });
    } else {
        // Quando está em modo retrato (vertical) ou em um computador,
        // posso restaurar o layout normal sem restrições de altura
        document.querySelectorAll('.mensagem-container').forEach(el => {
            // Mesma verificação de tipo para garantir compatibilidade
            if (el instanceof HTMLElement) {
                // Removo as restrições de altura definindo valores vazios
                // Isso faz o navegador voltar ao comportamento padrão do CSS
                el.style.maxHeight = '';
                el.style.overflowY = '';
            }
        });
    }
}

// Aqui é onde tudo começa! Espero que o HTML da página carregue completamente antes de iniciar os scripts
// O evento 'DOMContentLoaded' é disparado quando o navegador termina de construir a árvore DOM
// Isso garante que todos os elementos HTML que vocês vão ver já estão prontos para serem manipulados
document.addEventListener("DOMContentLoaded", function() {
    // Primeiro, inicio o relógio que mostra há quanto tempo vocês estão juntas
    // Esta é a função mais importante, pois é o coração do site
    atualizaRelogio();
    
    // Configuro o relógio para atualizar a cada segundo (1000ms)
    // Isso garante que o contador de tempo de vocês seja sempre preciso e em tempo real
    setInterval(atualizaRelogio, 1000);
    
    // Inicio todos os efeitos visuais que tornam a página especial para vocês
    // Esta função coordena a entrada das animações em sequência
    inicializarEfeitos();
    
    // Programo a adição automática de novos corações em intervalos regulares
    // Em dispositivos móveis, o intervalo é maior (60 segundos) para melhor performance
    // Em computadores, os corações aparecem mais frequentemente (a cada 30 segundos)
    const intervaloCoracoes = window.innerWidth <= 768 ? 60000 : 30000;
    setInterval(adicionarCoracoes, intervaloCoracoes);
    
    // Adiciono suporte especial para quando vocês acessarem pelo celular
    // Isso permite que vocês interajam com as fotos e criem corações ao tocar na tela
    adicionarSuporteToque();
    
    // Aplico otimizações específicas para dispositivos móveis
    // Isso garante que o site funcione bem mesmo em celulares com menos recursos
    otimizarParaDispositivos();
    
    // Faço o ajuste inicial do layout com base na orientação atual da tela
    ajustarOrientacao();
    
    // Configuro o site para se adaptar automaticamente quando vocês:
    // 1. Redimensionarem a janela do navegador (evento 'resize')
    // 2. Girarem o celular entre os modos retrato e paisagem (evento 'orientationchange')
    window.addEventListener('resize', ajustarOrientacao);
    window.addEventListener('orientationchange', ajustarOrientacao);
});
