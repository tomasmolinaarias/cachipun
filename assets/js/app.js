// let boton = document.getElementById('btn');
let jugando = document.getElementById("jugada")
// let random = Math.floor(Math.random()*(4-1))+1;
// console.log(random)
document.getElementById('btn').addEventListener('click', function () {
    console.log(jugando.value)
    let random = Math.floor(Math.random() * (4 - 1)) + 1;
    console.log(random)
    if (jugando.value === random) {
        alert = ("empate")
        console.log('empate')
    } else if (jugando.value == 1 && random === 2) {
        alert("perdiste intenta otra ves")
        console.log('perdiste')
    } else if (jugando.value == 2 && random === 3) {

        alert("perdiste intenta otra ves")
        console.log('perdiste')
    } else if (jugando.value == 3 && random === 1) {

        alert("perdiste intenta otra ves")
        console.log('perdiste')
    } else if (jugando.value == 1 && random === 3) {

        alert("ganaste quieres jugar de nuevo")
        console.log('ganaste')
    } else if (jugando.value == 2 && random === 1) {

        alert("ganaste quieres jugar de nuevo")
        console.log('ganaste')
    } else if (jugando.value == 3 && random === 2) {

        alert("ganaste quieres jugar de nuevo")
        console.log('ganaste')
    } else {

        alert("porfavor ingresa un numero del 1 al 3")
    }

})