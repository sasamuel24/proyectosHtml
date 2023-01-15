        // 1 es piedra , 2 es papel , 3 es tijera
        function aleatorio(min,max){
            return Math.floor(Math.random()*(max-min+1)+1) 
        }
        function eleccion(jugada){
            let resultado= " "

            if(jugada==1){
                resultado= "Piedra 🪨🪨"
            }
            else if(jugada==2){
                resultado= " Papel 📄📄"
            }
            else if (jugada==3){
                resultado= "Tijera ✂️✂️"
            } else{ 
                resultado= "Opción invalida ❌❌"
            }
            return resultado
        }
        
        let jugador= 0
        let min= 1
        let max = 3
        let triunfos= 0
        let perdidas= 0
        let empate = 0
        let cantidad= 0

        while (triunfos < 3 && perdidas < 3){
            pc= aleatorio(min,max)
            jugador= prompt(" Elige : 1 para piedra , 2 para papel y 3 para tijera")

            alert("Tu eliges: "+ eleccion(jugador))
            alert ("Pc elige: " + eleccion(pc))

            if (jugador==pc){
                alert("EMPATE")
                empate= empate + 1
             } 
             
            else if((jugador==1 && pc==3) || (jugador==3 && pc==2) || (jugador==3 && pc==2)){
            alert("GANASTE")
            triunfos= triunfos + 1
            } 
            
        else {
            alert("PERDISTE")
            perdidas= perdidas + 1
            }
        }