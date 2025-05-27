// Data em que o cronometro vai iniciar a contagem

const data = new Date("2024-07-02T23:59:00")

const textoFinal = document.getElementsByClassName("texto-final")


// Função que vai calcular a diferença e atualizar a tela

function atualizaRelogio() {
    const agora = new Date()
    const diferenca = data - agora

    //a função Math.abs tira o sinal de negativo, permitindo que conte até a data e quando essa data passar, continue contando
    let segundos = Math.abs(Math.floor(diferenca / 1000))  

    // Quebra os seguundos em dias, horas, minutos e segundos restantes
    const dias = Math.floor(segundos / (60 * 60 * 24))
    const horas = Math.floor((segundos % (60 * 60 * 24)) / (60 * 60))
    const minutos = Math.floor((segundos % (60 * 60)) / 60)
    const segundosRestantes = segundos % 60

    //Exibe o resultado no elemento que tem o id=relogio

    document.getElementById("relogio").textContent = 
     `São\n${dias.toString().padStart(2, '0')}d `+
     `${horas.toString().padStart(2, '0')}h `+
     `${minutos.toString().padStart(2, '0')}m `+
     `${segundosRestantes.toString().padStart(2, '0')}s \n Sendo feliz ao seu lado.`;

}


// Espera todo o html carregar para iniciar a contagem e atualizar o relogio a cada segundo

document.addEventListener("DOMContentLoaded", function() { 
    atualizaRelogio()
    setInterval(atualizaRelogio, 1000)
})





