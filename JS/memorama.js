let iconos = []
let eleccion = []

generarTablero()

function cargarIconos() {
    iconos = [
        '<img src="IMAGEN/instagram.png" width="100" height="100" />',
        '<img src="IMAGEN/facebook.png" width="100" height="100" />',
        '<img src="IMAGEN/youtube.png" width="100" height="100" />',
        '<img src="IMAGEN/whatsapp.png" width="100" height="100" />',
        '<img src="IMAGEN/twitter.png" width="100" height="100" />',
        '<img src="IMAGEN/tik-tok.png" width="100" height="100" />',
        '<img src="IMAGEN/snapchat.png" width="100" height="100" />',
        '<img src="IMAGEN/linkedin.png" width="100" height="100" />',
    ]
}

function reiniciar() {
    cargarIconos()
    eleccion = []
    let desafio = document.getElementById("desafio")
    let cartas = []
    for (let i = 0; i < 16; i++) {
        cartas.push(`
            <div class="area-tarjeta" onclick="seleccionar(${i})">
                <div class="tarjeta" id="tarjeta${i}">
                    <div class="cara trasera" id="trasera${i}">
                        ${iconos[0]}
                    </div>
                    <div class="cara superior">
                        <img src="IMAGEN/toque.png" width="100" height="100" />
                    </div>
                </div>
            </div>        
        `)
        if (i % 2 == 1) {
            iconos.splice(0, 1)
        }
    }
    cartas.sort(() => Math.random() - 0.5)
    desafio.innerHTML = cartas.join(" ")
}

function seleccionar(i) {
    let carta = document.getElementById("tarjeta" + i)
    if (carta.style.transform != "rotateY(180deg)") {
        carta.style.transform = "rotateY(180deg)"
        eleccion.push(i)
    }
    if (eleccion.length == 2) {
        deseleccionar(eleccion)
        eleccion = []
    }
} 

function deseleccionar(eleccion) {
    setTimeout(() => {
        let reverso1 = document.getElementById("trasera" + eleccion[0])
        let reverso2 = document.getElementById("trasera" + eleccion[1])
        if (reverso1.innerHTML != reverso2.innerHTML) {
            let reverso1 = document.getElementById("tarjeta" + eleccion[0])
            let reverso2 = document.getElementById("tarjeta" + eleccion[1])
            reverso1.style.transform = "rotateY(0deg)"
            reverso2.style.transform = "rotateY(0deg)"
        } else {
            reverso1.style.background = "pal"
            reverso2.style.background = "pal"
            juegoCompletado()
        }
    }, 1000);
}

function juegoCompletado() {
    let tarjetas = document.querySelectorAll(".tarjeta" ) 
    let parejasEncontradas = 0
    for (let i = 0; i < tarjetas.length; i++) {
      if (tarjetas[i].style.background == "pal") {
        parejasEncontradas++
      }
    }
    if (parejasEncontradas == tarjetas.length / 2) {
      alert("¡Juego completado!")
    }
  }