const sectionbtnReinicar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascotas')
const bntnFuego = document.getElementById('boton-fuego')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const bntnAgua = document.getElementById('boton-agua')
const bntnTierra = document.getElementById('boton-tierra')
const btnReinicar = document.getElementById('boton-reiniciar')
// SEGUNDA FUNCION 
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const input1 =  document.getElementById('Hipodoge')
const input2 = document.getElementById('Capipepo')
const input3 = document.getElementById('Ratigueya')
const SpanMascotaJugador = document.getElementById('mascota-jugador')
const jugar = 1
//TERCERA FUNCION
let min= 1
let max= 3
const SpanMascotaEnemigo= document.getElementById('mascota-enemigo')
//NOVENA FUNCION
const spanVidasJugador= document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
//DECIMA FUNCION
const seccionMensajes = document.getElementById('resultado')
const sectionbtnReiniciar = document.getElementById('reiniciar')
//UNDECIMA FUNCION
const ataquesJ = document.getElementById('ataques-j')
const ataquesE = document.getElementById('ataques-e')
// VARIABLE GLOBAL, PARA QUE CADA FUNCION ENTREN

let arrayMokepones = []
let ataqueJugador   
let ataqueEnemigo
let resultadoCombate
let vidasJugador = 3
let vidasEnemigo = 3
// GENERACION DE CLASES 
class Mokepon {
    constructor (nombre , foto , vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.arrayAtaques = []
    }
}

let Hipodoge = new Mokepon('Hipodoge','imgMokepones/mokepon1.jpg', 3)
let Capipepo = new Mokepon('Capipepo' , 'imgMokepones/mokepon2.jpg' , 3)
let Ratigueya = new Mokepon('Ratigueya' , 'imgMokepones/mokepon3.jpg' , 3)

Hipodoge.arrayAtaques.push(
    {nombre: '🔥', id:'boton-fuego'},{nombre: '🔥', id:'boton-fuego'},{nombre: '🔥', id:'boton-fuego'}, {nombre: '💧', id:'boton-agua'},{nombre:'🌱',id:'boton-tierra'}
)

Capipepo.arrayAtaques.push(
    {nombre: '💧', id:'boton-agua'},{nombre: '💧', id:'boton-agua'},{nombre: '💧', id:'boton-agua'},{nombre: '🔥', id:'boton-fuego'},{nombre:'🌱',id:'boton-tierra'}
)

Ratigueya.arrayAtaques.push(
    {nombre:'🌱',id:'boton-tierra'},{nombre:'🌱',id:'boton-tierra'},{nombre:'🌱',id:'boton-tierra'},{nombre: '💧', id:'boton-agua'},{nombre: '🔥', id:'boton-fuego'}
)





function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionbtnReinicar.style.display = 'none'
    
    botonMascotaJugador.addEventListener('click', seleccionarMacostaJugador)
    bntnFuego.addEventListener('click',ataqueFuego)
    bntnAgua.addEventListener('click',ataqueAgua)
    bntnTierra.addEventListener('click',ataqueTierra)
    btnReinicar.addEventListener('click',reiniciarJuego)
}

function seleccionarMacostaJugador(){

    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'
    
    if(input1.checked){
        SpanMascotaJugador.innerHTML = 'Hipodoge'
    } else if(input2.checked){
        SpanMascotaJugador.innerHTML = 'Capipepo'
    } else if(input3.checked){
        SpanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert("Aun no has seleccionado tu mascota , por favor seleccionar mascota")
        jugar = 0
        reiniciarJuego()
    } if(jugar==1){
        seleccionarMacostaEnemigo()
    }
}

function seleccionarMacostaEnemigo(){
    let numeroAleatorio = aleatorio(min,max)

    if(numeroAleatorio==1){
        SpanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if(numeroAleatorio==2){
        SpanMascotaEnemigo.innerHTML = 'Capipepo'
    } else if(numeroAleatorio==3){
        SpanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}


function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+1) 
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    seleccionarAtaqueEnemigo()
}

function  ataqueAgua(){
    ataqueJugador= 'AGUA'
    seleccionarAtaqueEnemigo()
}

function ataqueTierra(){
    ataqueJugador= 'TIERRA'
    seleccionarAtaqueEnemigo()
}


let min2= 1
let max2= 3

function seleccionarAtaqueEnemigo(){
    let numeroAleatorio2 = aleatorio(min2,max2)

    if(numeroAleatorio2==1){
        ataqueEnemigo= 'FUEGO'
    } else if(numeroAleatorio2==2){
        ataqueEnemigo= 'AGUA'
    } else if(numeroAleatorio2==3){
        ataqueEnemigo= 'TIERRA'
    }

    combate()
}

function combate(){

    if (ataqueJugador==ataqueEnemigo){
        crearMensaje("EMPATE ❗")
     } 
     
    else if((ataqueJugador== 'FUEGO'  && ataqueEnemigo=='TIERRA') || (ataqueJugador== 'AGUA' && ataqueEnemigo=='FUEGO') || (ataqueJugador=='TIERRA' && ataqueEnemigo=='AGUA')){
        crearMensaje("GANASTE ✅")
        vidasEnemigo= vidasEnemigo - 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } 
    
    else {
        crearMensaje("PERDISTE ❌")
        vidasJugador= vidasJugador - 1
        spanVidasJugador.innerHTML = vidasJugador
    }
    // revisar la vidas y declarar quien gano la batalla
    revisarVidas()
}

function revisarVidas(){
    
    if (vidasEnemigo == 0){
        seccionMensajes.innerHTML = 'GANASTE!!!!!🎆🥳🎉🍾, FELICITACIONES'
        desabilitarBotones()
        sectionbtnReinicar.style.display = 'block'
    } else if (vidasJugador== 0){
        seccionMensajes.innerHTML = 'PERDISTE EL COMBATE😔💔🙍‍♂️'
        desabilitarBotones()
        sectionbtnReiniciar.style.display = 'block'
    }
}

function crearMensaje(resultadoCombate){

    seccionMensajes.innerHTML = resultadoCombate
    ataquesJ.innerHTML = ataqueJugador
    ataquesE.innerHTML = ataqueEnemigo

    // let parrafo = document.createElement('p')
    // parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ' . La mascota del enemigo ataco con ' + ataqueEnemigo + ' ' + resultadoCombate
}

function reiniciarJuego(){
    location.reload()
}

function desabilitarBotones(){
    bntnFuego.disabled = true
    bntnAgua.disabled = true
    bntnTierra.disabled = true
}

window.addEventListener('load',iniciarJuego)