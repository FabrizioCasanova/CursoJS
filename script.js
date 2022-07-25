// Calculador de impuesto al valor agregado (IVA)
let numero
let pregunta
do {
    numero = parseFloat(prompt('Ingrese el numero a calcular'))
        if (numero) {alert (`El IVA de este numero es: ${numero * 21 /100}`)
            pregunta = prompt('¿Desea ingresar otro numero a calcular?').toLowerCase()}

    if (isNaN(numero)) { 
        alert('Por favor, ingrese un numero valido')}

} while (isNaN(numero) || pregunta =='si')

console.log(numero)
console.log(pregunta)