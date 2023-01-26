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
//CANVAS 
const seccionCanvas= document.getElementById('ver-mapa')
const mapaCanvas= document.getElementById('mapa')
// VARIABLE GLOBAL, PARA QUE CADA FUNCION ENTREN


let jugadorId = null
let enemigoId = null
let mokeponesEnemigos = []
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
let mascotaJugadorObjeto
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
let lienzo = mapa.getContext('2d')
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "imgMokepones/mapaMokepones.png"
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaxMapa = 600

if(anchoDelMapa>anchoMaxMapa){
    anchoDelMapa= anchoMaxMapa - 20
}
alturaQueBuscamos = anchoDelMapa * 600 / 800


mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos




// GENERACION DE CLASES 
class Mokepon {
    constructor (nombre , foto , vida , fotoMapa , id= null){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.arrayAtaques = []
        this.ancho = 80
        this.alto = 80
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0 , mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
        this.id = id
    }
    pintarMokepon(){
        lienzo.drawImage( 
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
    )
    }
}

let Hipodoge = new Mokepon('Hipodoge' , 'imgMokepones/mokepon1.jpg',5,'imgMokepones/hipodogemap.png')
let Capipepo = new Mokepon('Capipepo','imgMokepones/mokepon2.jpg' ,5,'imgMokepones/capipepomap.png')
let Ratigueya = new Mokepon('Ratigueya','imgMokepones/mokepon3.jpg' ,5,'imgMokepones/ratigueyamap.png')

const HipodogeAtaque = [
    {nombre: '🔥', id:'boton-fuego'},{nombre: '🔥', id:'boton-fuego'},{nombre: '🔥', id:'boton-fuego'}, {nombre: '💧', id:'boton-agua'},{nombre:'🌱',id:'boton-tierra'}
]

Hipodoge.arrayAtaques.push(...HipodogeAtaque)

const CapipepoAtaques = [
    {nombre: '💧', id:'boton-agua'},{nombre: '💧', id:'boton-agua'},{nombre: '💧', id:'boton-agua'},{nombre: '🔥', id:'boton-fuego'},{nombre:'🌱',id:'boton-tierra'}
]

Capipepo.arrayAtaques.push(...CapipepoAtaques)

const RatigueyaAtaques = [
    {nombre:'🌱',id:'boton-tierra'},{nombre:'🌱',id:'boton-tierra'},{nombre:'🌱',id:'boton-tierra'},{nombre: '💧', id:'boton-agua'},{nombre: '🔥', id:'boton-fuego'}
]

Ratigueya.arrayAtaques.push(...RatigueyaAtaques)

arrayMokepones.push(Hipodoge,Capipepo,Ratigueya)


function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionbtnReinicar.style.display = 'none'
    seccionCanvas.style.display= 'none'

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

    unirseAlJuego()
}

function unirseAlJuego(){
    fetch("http://localhost:8080/unirse")
        .then(function (res){
            if (res.ok) {
                res.text()
                    .then(function (respuesta){
                        console.log(respuesta);
                        jugadorId = respuesta
                    })
            }
        })
}

function seleccionarMacostaJugador(){

    let jugar=1
    sectionSeleccionarMascota.style.display = 'none'
    // lienzo.fillRect(5,15,20,40)
    
    
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
    }   

    seleccionarMokepon(mascotaJugador)
    
    
    extraerAtaques(mascotaJugador)
    seccionCanvas.style.display = 'flex'
    iniciarMapa()
}

function seleccionarMokepon(mascotaJugador){
    fetch(`http://localhost:8080/mokepon/${jugadorId}`,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    })
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

            if(arrayAtaqueJugador.length === 5){
                enviarAtaques()
            }


        })
    })

    
}

function enviarAtaques(){
    fetch(`http://localhost:8080/mokepon/${jugadorId}/ataques`,{
    method: "post",
    headers: {
        "Content-Type": "application/json"     
    
        },
    body: JSON.stringify({
        ataques : arrayAtaqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques(), 50)
}

function obtenerAtaques(){
    fetch(`http://localhost:8080/mokepon/${enemigoId}/ataques`)
        .then(function (res){
            if(res.ok){
                res.json()
                    .then(function ({ataques}){
                        if(ataques.length === 5){
                            ataqueEnemigo = ataques
                            combate()
                        }
                    })
            }
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

    clearInterval(intervalo)

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

function pintarCanvas(){
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0,0,mapa.width,mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )

    mascotaJugadorObjeto.pintarMokepon()
    enviarPosicion(mascotaJugadorObjeto.x , mascotaJugadorObjeto.y)

    mokeponesEnemigos.forEach(function (mokepon) {
        mokepon.pintarMokepon()
        revisarColision(mokepon)
    })
}

function enviarPosicion(x,y){
    fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function(res) {
        if(res.ok){
            res.json()
                .then(function ({enemigos}){
                    console.log(enemigos);
                     mokeponesEnemigos = enemigos.map(function (enemigo) {
                        let mokeponEnemigo = null
                        const mokeponNombre = enemigo.mokepon.nombre || ""
                        if(mokeponNombre == "Hipodoge"){
                            mokeponEnemigo = new Mokepon('Hipodoge', 'imgMokepones/mokepon1.jpg',5,'imgMokepones/hipodogemap.png',enemigoId)
                        } else if (mokeponNombre == "Capipepo"){
                            mokeponEnemigo = new Mokepon('Capipepo','imgMokepones/mokepon2.jpg' ,5,'imgMokepones/capipepomap.png',enemigoId)
                        } else if ( mokeponNombre == "Ratigueya"){
                           mokeponEnemigo = new Mokepon('Ratigueya','imgMokepones/mokepon3.jpg' ,5,'imgMokepones/ratigueyamap.png',enemigoId)
                        }
                        mokeponEnemigo.x = enemigo.x
                        mokeponEnemigo.y = enemigo.y

                        return mokeponEnemigo
                    })
                })
        }
    })
}

function moverDerecha(){
    mascotaJugadorObjeto.velocidadX = 5
}

function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = - 5 
}

function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = 5
}

function moverArriba(){
    mascotaJugadorObjeto.velocidadY = - 5
}

function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'Alt': 
            moverArriba
            break
        default:
            break;
    }
}

function iniciarMapa(){
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener('keydown',sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)
    mascotaJugadorObjeto = obetenerObjetoMascota(mascotaJugador)
}

function obetenerObjetoMascota(){
    for (let i = 0; i < arrayMokepones.length; i++) {
        if (mascotaJugador==arrayMokepones[i].nombre) {

            return arrayMokepones[i]
        } 
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = 
    mascotaJugadorObjeto.y
    const abajoMascota = 
    mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = 
    mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = 
    mascotaJugadorObjeto.x

    if(abajoMascota < arribaEnemigo || 
       arribaMascota > abajoEnemigo || 
       derechaMascota < izquierdaEnemigo || 
       izquierdaMascota > derechaEnemigo){

        return
    }

    detenerMovimiento() 
    clearInterval(intervalo)
    enemigoId = enemigo.id
    sectionSeleccionarAtaque.style.display = 'flex'
    seccionCanvas.style.display = 'none'
    seleccionarMacostaEnemigo(enemigo)
    
}

window.addEventListener('load',iniciarJuego)