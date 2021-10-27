const boton = document.getElementById('btn');
// let random = Math.floor(Math.random()*(4-1))+1;
// console.log(random)
boton.addEventListener('click', function resultado(jugando) {
    let random = Math.floor(Math.random() * (4 - 1)) + 1;

    let jugadon = document.getElementById("jugada").value
    if (jugadon === random) {
        alert = ("empate")
    } else if (jugando == 1 && random === 2) {

        alert("perdiste intenta otra ves")
    } else if (jugando == 2 && random === 3) {

        alert("perdiste intenta otra ves")
    } else if (jugando == 3 && random === 1) {

        alert("perdiste intenta otra ves")
    } else if (jugando == 1 && random === 3) {

        alert("ganaste quieres jugar de nuevo")
    } else if (jugando == 2 && random === 1) {

        alert("ganaste quieres jugar de nuevo")
    } else if (jugando == 3 && random === 2) {

        alert("ganaste quieres jugar de nuevo")
    } else {

        alert("porfavor ingresa un numero del 1 al 3")
    }
    return [
        [resultado]
    ]
})