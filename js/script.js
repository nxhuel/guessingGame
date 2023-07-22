// El juego selecciona un numero random del 1 al 100 para que adivines.
let numeroAzar = Math.floor(Math.random() * 100) + 1

let numeroEntrada = document.getElementById ('numeroEntrada')

let mensaje = document.getElementById ('mensaje')

let intento = document.getElementById ('intento')

let intentos = 0

// Esta accion se ejecuta cuando te toque el boton 'comprobar'.
function chequearResultado () {

    intentos ++
    intento.textContent = intentos

    let numeroIngresado = parseInt (numeroEntrada.value)

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN (numeroIngresado)) {
        mensaje.textContent = 'Por favor, ingrese un numero valido entre el 1 y 100'
        return
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = '!Felicidades, has adivinado el numero';
        mensaje.style.color = '#00E1FC';
        numeroEntrada.disabled = true;
    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = 'Tu numero es menor al numero pensado, subi mas.';
        mensaje.style.color = '#EA1050';
    } else {
        mensaje.textContent = 'Tu numero es mayor al numero pensado, baja mas.';
        mensaje.style.color = '#EA1050';
    }
}