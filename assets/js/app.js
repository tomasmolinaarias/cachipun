// selecion de partidas
let partidas = parseInt (prompt ("cuantas partidas quieres jugar "));

let jugadaPC = "";
let jugada ="";
let resumen = "";

function eleccionMaquina(jugadaPC){
    let numero = Math.floor(Math.random()*3);
    switch(numero){
        case `0`:
            jugadaPC = "piedra"
        break;
        case `1`:
            jugadaPC = "tijera"
        break;
        case `2`:
            jugadaPC = "papel"
        break;    
    };
    return jugadaPC;
};

//funcion para el resulatado del juego
function cachipun (jugada, jugadaPC){
    if(jugadaPC === jugada){
        resultado = "empate";
    } //winner
    else if(jugadaPC === "tijera" && jugada === "piedra"){
        resultado = "victoria";
    }
    else  if(jugadaPC === "papel" && jugada === "tijera"){
        resultado = "victoria";
    }
    else if(jugadaPC === "piedra" && jugada === "papel"){
        resultado = "victoria";
    } //gameover
    else if(jugadaPC === "tijera" && jugada === "papel"){
        resultado = "derrota";
    }
    else if(jugadaPC === "piedra" && jugada === "tijera"){
        resultado = "derrota";
    }
    else if(jugadaPC === "papel" && jugada === "piedra"){
        resultado = "derrota";
    }
    else {
        resultado = "error";
    }
    return resultado;
};
for(i=0; i < partidas; i++) {
    jugada = prompt (`¿cual elijiras tijera, piedra o papel?`,`piedra`).toLowerCase();
    jugadaPC = eleccionMaquina (jugadaPC)
    resumen = cachipun(jugada, jugadaPC)
    switch(resumen){
        case "victoria":
             alert ("felicidades has ganado contra la consola 😸")
             console.log("felicidades")
        break;
        case "derrota":
            alert ("lo siento perdiste contra la consola 😿")
            console.log("sorry para la otra")
        break;
        case "empate":
            alert ("cerca fue un empate 🙀")
            console.log("cerca")
        break;
        default:
             alert("lo siento pero no escribiste lo que te pedimos")
        break;
    };
    
};
//hola profe y francisco le pido porfavor si me pueden dar hasta el domingo ya que el viernes y el sabado voy estar ocupado 
// trate de hacerlo como una compañera y algo tuve que hacer mal XD







