let ataqueJugador   // VARIABLE GLOBAL, PARA QUE CADA FUNCION ENTREN
let ataqueEnemigo
let resultadoCombate
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionbtnReinicar = document.getElementById('reiniciar')
    sectionbtnReinicar.style.display = 'none'



    let botonMascotaJugador = document.getElementById('boton-mascotas')
    botonMascotaJugador.addEventListener('click', seleccionarMacostaJugador)

    let bntnFuego = document.getElementById('boton-fuego')
    bntnFuego.addEventListener('click',ataqueFuego)
    let bntnAgua = document.getElementById('boton-agua')
    bntnAgua.addEventListener('click',ataqueAgua)
    let bntnTierra = document.getElementById('boton-tierra')
    bntnTierra.addEventListener('click',ataqueTierra)

    let btnReinicar = document.getElementById('boton-reiniciar')
    btnReinicar.addEventListener('click',reiniciarJuego)
}

function seleccionarMacostaJugador(){

    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'
    
    let input1 =  document.getElementById('Hipodoge')
    let input2 = document.getElementById('Capipepo')
    let input3 = document.getElementById('Ratigueya')
    let SpanMascotaJugador = document.getElementById('mascota-jugador')
    let jugar = 1 


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
    }

    if(jugar==1){
        seleccionarMacostaEnemigo()
    }
    

}


let min= 1
let max= 6

function seleccionarMacostaEnemigo(){
    let numeroAleatorio = aleatorio(min,max)
    let SpanMascotaEnemigo= document.getElementById('mascota-enemigo')


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
    let spanVidasJugador= document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if (ataqueJugador==ataqueEnemigo){
        crearMensaje("EMPATE ❗")
        spanVidasJugador
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
    let seccionMensajes = document.getElementById('resultado')

    if (vidasEnemigo == 0){
        seccionMensajes.innerHTML = 'GANASTE!!!!!🎆🥳🎉🍾, FELICITACIONES'
        desabilitarBotones()
        let sectionbtnReinicar = document.getElementById('reiniciar')
        sectionbtnReinicar.style.display = 'block'
    } else if (vidasJugador== 0){
        seccionMensajes.innerHTML = 'PERDISTE EL COMBATE😔💔🙍‍♂️'
        desabilitarBotones()
        let sectionbtnReiniciar = document.getElementById('reiniciar')
        sectionbtnReiniciar.style.display = 'block'
    }


}

function crearMensaje(resultadoCombate){
    let seccionMensajes = document.getElementById('resultado')
    let ataquesJ = document.getElementById('ataques-j')
    let ataquesE = document.getElementById('ataques-e')

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
    let bntnFuego = document.getElementById('boton-fuego')
    bntnFuego.disabled = true
    let bntnAgua = document.getElementById('boton-agua')
    bntnAgua.disabled = true
    let bntnTierra = document.getElementById('boton-tierra')
    bntnTierra.disabled = true
}

window.addEventListener('load',iniciarJuego)