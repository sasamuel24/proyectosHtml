let ataqueJugador   // VARIABLE GLOBAL, PARA QUE CADA FUNCION ENTREN
let ataqueEnemigo
function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascotas')
    botonMascotaJugador.addEventListener('click', seleccionarMacostaJugador)

    let bntnFuego = document.getElementById('boton-fuego')
    bntnFuego.addEventListener('click',ataqueFuego)
    let bntnAgua = document.getElementById('boton-agua')
    bntnAgua.addEventListener('click',ataqueAgua)
    let bntnTierra = document.getElementById('boton-tierra')
    bntnTierra.addEventListener('click',ataqueTierra)
}

function seleccionarMacostaJugador(){

    let input1 =  document.getElementById('Hipodoge')
    let input2 = document.getElementById('Capipepo')
    let input3 = document.getElementById('Ratigueya')
    let input4 = document.getElementById('Langostelvis')
    let input5 = document.getElementById('Tucapalma')
    let input6 = document.getElementById('Pydos')
    let SpanMascotaJugador = document.getElementById('mascota-jugador')
    let jugar = 1 


    if(input1.checked){
        alert("Seleccionaste a Hipodoge")
        SpanMascotaJugador.innerHTML = 'Hipodoge'
    } else if(input2.checked){
        alert("Selccionaste a Capipepo como tu mascota")
        SpanMascotaJugador.innerHTML = 'Capipepo'
    } else if(input3.checked){
        alert("Seleccionaste a Ratigueya como tu mascota")
        SpanMascotaJugador.innerHTML = 'Ratigueya'
    } else if(input4.checked){
        alert("Seleccionaste a Langostelvis como tu mascota")
        SpanMascotaJugador.innerHTML = 'Langostelvis'
    } else if(input5.checked){
        alert("Seleccionaste a Tucapalma como tu mascota")
        SpanMascotaJugador.innerHTML = 'Tucapalma'
    }else if(input6.checked){
        alert("Seleccionaste a Pydos como tu mascota")
        SpanMascotaJugador.innerHTML = 'Pydos'
    } else {
        alert("Aun no has seleccionado tu mascota , SELECCIONALA CRACK")
        jugar= 0
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
        alert("Tu enemigo escogio a Hipodoge como mascota")
        SpanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if(numeroAleatorio==2){
        alert("Tu enemigo escogio a Capipepo como mascota ")
        SpanMascotaEnemigo.innerHTML = 'Capipepo'
    } else if(numeroAleatorio==3){
        alert("Tu enemigo esocogio a Ratigueya como mascota ")
        SpanMascotaEnemigo.innerHTML = 'Ratigueya'
    } else if(numeroAleatorio==4){
        alert("Tu enemigo escogio a Langostelvis como mascota")
        SpanMascotaEnemigo.innerHTML = 'Langostelvis'
    } else if(numeroAleatorio==5){
        alert("Tu enemigo escogio a Tucapalma como mascota")
        SpanMascotaEnemigo.innerHTML = 'Tucapalma'
    } else if(numeroAleatorio==6){
        alert("Tu enemigo escogio a Pydos como mascota")
        SpanMascotaEnemigo.innerHTML = 'Pydos'
    }
}


function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+1) 
}

function ataqueFuego(){
    let  spanAtaqueJuador = document.getElementById('ataque-jugador')
    ataqueJugador = 'FUEGO'
    spanAtaqueJuador.innerHTML = 'FUEGO'
    seleccionarAtaqueEnemigo()
}

function  ataqueAgua(){
    let spanAtaqueJuador = document.getElementById('ataque-jugador')
    ataqueJugador= 'AGUA'
    spanAtaqueJuador.innerHTML = 'AGUA'
    seleccionarAtaqueEnemigo()
}

function ataqueTierra(){
    let spanAtaqueJuador = document.getElementById('ataque-jugador')
    ataqueJugador= 'TIERRA'
    spanAtaqueJuador.innerHTML = 'TIERRA'
    seleccionarAtaqueEnemigo()
}


let min2= 1
let max2= 3

function seleccionarAtaqueEnemigo(){
    let spanAtaqueEnemigo = document.getElementById('ataque-enemigo')
    let numeroAleatorio2 = aleatorio(min2,max2)

    if(numeroAleatorio2==1){
        ataqueEnemigo= 'FUEGO'
        spanAtaqueEnemigo.innerHTML = 'FUEGO'
    } else if(numeroAleatorio2==2){
        ataqueEnemigo= 'AGUA'
        spanAtaqueEnemigo.innerHTML = 'AGUA'
    }else if(numeroAleatorio2==3){
        ataqueEnemigo= 'TIERRA'
        spanAtaqueEnemigo.innerHTML = 'TIERRA'
    }

}


window.addEventListener('load',iniciarJuego)