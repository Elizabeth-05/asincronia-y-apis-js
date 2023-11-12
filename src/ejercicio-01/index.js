// Escribe tu código aquí:


function imprimirHolaMundoAsyncrono(callbacks) {
    console.log('Imprimiendo Hola Mundo....')
setTimeout(() => {

callbacks('Hola mundo')

}, 2000)

}

imprimirHolaMundoAsyncrono((mensaje) => {
    console.log(mensaje)

})


