const sectionbtnReinicar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascotas')
const sectionSeleccionarAtaque = document.getElementById
('seleccionar-ataque')


const contenerdorTarjetas = document.getElementById('contenedorTarjetas')
// SEGUNDA FUNCION 
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const SpanMascotaJugador = document.getElementById('mascota-jugador')
const jugar = 1
//TERCERA FUNCION
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

const contenedorAtaques = document.getElementById('contenedorAtaques')
// VARIABLE GLOBAL, PARA QUE CADA FUNCION ENTREN

let arrayMokepones = []
let ataqueJugador
let ataqueEnemigo = []
let resultadoCombate
let opcionMokepones
let numeroAleatorio
let numeroAleatorio2
let input1 
let input2 
let input3 
let bntnFuego
let bntnAgua
let bntnTierra
let btnReinicar
let arrayBotones = []
let arrayAtaqueJugador = []
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let iAtaqueJugador
let iAtaqueEnemigo
let nuevoAtaqueJugador
let nuevoAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 5
let vidasEnemigo = 5

// GENERACION DE CLASES 
class Mokepon {
    constructor (nombre , foto , vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.arrayAtaques = []
    }
}

let Hipodoge = new Mokepon('Hipodoge' , 'imgMokepones/mokepon1.jpg',5)
let Capipepo = new Mokepon('Capipepo','imgMokepones/mokepon2.jpg' ,5)
let Ratigueya = new Mokepon('Ratigueya','imgMokepones/mokepon3.jpg' ,5)

Hipodoge.arrayAtaques.push(
    {nombre: '🔥', id:'boton-fuego'},{nombre: '🔥', id:'boton-fuego'},{nombre: '🔥', id:'boton-fuego'}, {nombre: '💧', id:'boton-agua'},{nombre:'🌱',id:'boton-tierra'}
)

Capipepo.arrayAtaques.push(
    {nombre: '💧', id:'boton-agua'},{nombre: '💧', id:'boton-agua'},{nombre: '💧', id:'boton-agua'},{nombre: '🔥', id:'boton-fuego'},{nombre:'🌱',id:'boton-tierra'}
)

Ratigueya.arrayAtaques.push(
    {nombre:'🌱',id:'boton-tierra'},{nombre:'🌱',id:'boton-tierra'},{nombre:'🌱',id:'boton-tierra'},{nombre: '💧', id:'boton-agua'},{nombre: '🔥', id:'boton-fuego'}
)

arrayMokepones.push(Hipodoge,Capipepo,Ratigueya)


function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionbtnReinicar.style.display = 'none'

    arrayMokepones.forEach((mokepon)=>{
        opcionMokepones = `

        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre} />
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}/>
        </label>
        `
        contenerdorTarjetas.innerHTML += opcionMokepones
        input1 =  document.getElementById('Hipodoge')
        input2 = document.getElementById('Capipepo')
        input3 = document.getElementById('Ratigueya')
    })

    botonMascotaJugador.addEventListener('click', seleccionarMacostaJugador)
}

function seleccionarMacostaJugador(){

    let jugar=1
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'
    
    if(input1.checked){
        SpanMascotaJugador.innerHTML = input1.id
        mascotaJugador= input1.id
    } else if(input2.checked){
        SpanMascotaJugador.innerHTML = input2.id
        mascotaJugador= input2.id
    } else if(input3.checked){
        SpanMascotaJugador.innerHTML = input3.id
        mascotaJugador= input3.id
    } else {
        alert("Aun no has seleccionado tu mascota , por favor seleccionar mascota")
        jugar = 0
        reiniciarJuego()
    } if(jugar==1){
        extraerAtaques(mascotaJugador)
        seleccionarMacostaEnemigo()
    }
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < arrayMokepones.length; i++) {
        if (mascotaJugador==arrayMokepones[i].nombre) {

            ataques=arrayMokepones[i].arrayAtaques
        } 
    }
    mostrarAtaques(ataques)
}

function seleccionarMacostaEnemigo(){

    let numeroAleatorio = aleatorio(0, arrayMokepones.length -1)
    SpanMascotaEnemigo.innerHTML = arrayMokepones[numeroAleatorio].nombre
    ataquesMokeponEnemigo = arrayMokepones[numeroAleatorio].arrayAtaques
    console.log(numeroAleatorio)
    secuenciaDeAtaque()

}

function mostrarAtaques(ataques){
    ataques.forEach((arrayAtaques)=>{ataquesMokepon=`
    <button id=${arrayAtaques.id} class="btn-ataques bAtaque">${arrayAtaques.nombre }</button>
    `
    contenedorAtaques.innerHTML += ataquesMokepon 
    })
    bntnFuego = document.getElementById('boton-fuego')
    bntnAgua = document.getElementById('boton-agua')
    bntnTierra = document.getElementById('boton-tierra')
    btnReinicar = document.getElementById('boton-reiniciar')


    arrayBotones = document.querySelectorAll('.bAtaque') 
    btnReinicar.addEventListener('click',reiniciarJuego)

}

function secuenciaDeAtaque (){
    arrayBotones.forEach((boton)=>{
        boton.addEventListener('click', (e)=> {
            if(e.target.textContent=='🔥'){
                arrayAtaqueJugador.push('FUEGO')
                console.log(arrayAtaqueJugador)
                boton.style.background = '#2f58'
                boton.disabled = true
            } else if (e.target.textContent=='💧'){
                arrayAtaqueJugador.push('AGUA')
                console.log(arrayAtaqueJugador)
                boton.style.background='#2f58'
                boton.disabled = true
            } else{
                arrayAtaqueJugador.push('TIERRA')
                console.log(arrayAtaqueJugador)
                boton.style.background='#2f58'
                boton.disabled = true
            }
            seleccionarAtaqueEnemigo()
        })
    })

    
}

let min=0
let max=2
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+1) 
}

let min2= 1
let max2= 3

function seleccionarAtaqueEnemigo(){
    let numeroAleatorio2 = aleatorio(0,ataquesMokeponEnemigo.length -1)

    if(numeroAleatorio2==0 || numeroAleatorio2==1){
        ataqueEnemigo.push('FUEGO')
    } else if(numeroAleatorio2==3 || numeroAleatorio2==4){
        ataqueEnemigo.push('AGUA')
    } else{
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (arrayAtaqueJugador.length == 5) {
        combate()
    } else {
        
    }
}

function iAmbosOponentes(jugador,enemigo) {
    iAtaqueJugador= arrayAtaqueJugador[jugador]
    iAtaqueEnemigo= ataqueEnemigo[enemigo]

}

function combate(){

    for (let i = 0; i < arrayAtaqueJugador.length; i++) {
        if(arrayAtaqueJugador[i]==ataqueEnemigo[i]){
            iAmbosOponentes(i,i)
            crearMensaje("EMPATE ❗")
        }else if(arrayAtaqueJugador[i]=='FUEGO' && ataqueEnemigo[i]=='TIERRA' || arrayAtaqueJugador[i]=='AGUA' && ataqueEnemigo[i]=='FUEGO' || arrayAtaqueJugador[i]=='TIERRA' && ataqueEnemigo[i]=='AGUA') {
            iAmbosOponentes(i,i)
            crearMensaje("GANASTE ✅")  
            victoriasJugador++
            spanVidasJugador.innerHTML= victoriasJugador          
        }else{
            iAmbosOponentes(i,i)
            crearMensaje("PERDISTE ❌")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML= victoriasEnemigo
        }
    }
    // revisar la vidas y declarar quien gano la batalla
    revisarVictorias()
}

function revisarVictorias(){
    
    if (victoriasJugador==victoriasEnemigo){
        seccionMensajes.innerHTML = 'ESTO FUE UN EMPATE :/'
        sectionbtnReinicar.style.display = 'block'
    } else if (victoriasJugador>victoriasEnemigo){
        seccionMensajes.innerHTML = 'GANASTE EL COMBATE :)'
        sectionbtnReiniciar.style.display = 'block'
    }else{
        seccionMensajes.innerHTML = 'PERDISTE EL COMBATE :('
        sectionbtnReiniciar.style.display = 'block'
    }
}

function crearMensaje(resultadoCombate){

    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    seccionMensajes.innerHTML = resultadoCombate
    nuevoAtaqueJugador.innerHTML = iAtaqueJugador
    nuevoAtaqueEnemigo.innerHTML = iAtaqueEnemigo

    ataquesJ.appendChild(nuevoAtaqueJugador)
    ataquesE.appendChild(nuevoAtaqueEnemigo)

    // let parrafo = document.createElement('p')
    // parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ' . La mascota del enemigo ataco con ' + ataqueEnemigo + ' ' + resultadoCombate
}

function reiniciarJuego(){
    location.reload()
}

window.addEventListener('load',iniciarJuego)