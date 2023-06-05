function actualizarValor(elementoValor, valorFinal, duracion) { //defino la funcion "actualizar valor" y esta tomara 3 parametros, esta funsion se va a encargar de actualizar el valor de los elementosValor hasta el valor final de valorFinal
    let inicioValor = 0; //aca inicializo la variable con el valor cero. Se utilizará para realizar el seguimiento del valor actual del contador.
    let contador = setInterval(function () { // La función de flecha proporcionada se ejecutará repetidamente cada duration.
        inicioValor += 1 //Se incrementa en 1 el valor de inicioValor
        elementoValor.textContent = inicioValor;
        if (inicioValor === valorFinal) {
            clearInterval(contador); //Se verifica si el contador ha alcanzado el valor final.
        } else {
            console.log("Se ha alcanzado el valor valorFinal"); //: Si el contador no ha alcanzado el valor final, se ejecuta el código dentro del bloque
        }
    }, duracion);
}

function iniciarSimulador() { //defino la funcion iniciar simulador que no va a tomar ningun parametro esta se encargara de iniciar el simulador obteniendo los elementos de la clase.numero
    let elementosValores = document.querySelectorAll(".numero"); // esto es para obtener todos los elementos que tienen la clase "numero" y se almacenan en la variable elementosValores.
    let intervalo = 6000; // aca defino la variable "intervalo" con un valor de 6000, esto es el intervalo de timepo en milisegundos.

    elementosValores.forEach((elementoValor) => { //utilizo el metodo "forEach"para interar sobre cada elementoen "elementosValores", se ejecutara el codigo sovre la funcion de flecha.
        let valorFinal = parseInt(elementoValor.getAttribute("data-val"));
        let duracion = Math.floor(intervalo / valorFinal);
        actualizarValor(elementoValor, valorFinal, duracion); //llama a la función actualizarValor pasando como argumentos elementoValor, valorFinal y duracion. Esto iniciará el contador para actualizar el valor del elemento en el intervalo de tiempo especificado.
    });
}

iniciarSimulador(); //fuera del ciclo forEach, se llama a la función iniciarSimulador() para iniciar el proceso de simulación.