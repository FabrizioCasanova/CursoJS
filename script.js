const calculoPromedio = (nota1,nota2,nota3) => nota1 + nota2 + nota3 

let primerNota,segundaNota,tercerNota
let pregunta

do {
    primerNota = parseFloat(prompt('Ingrese la nota que tiene el/la alumno/a en su primer trimestre'))
    segundaNota = parseFloat(prompt('Ingrese la nota que tiene el/la alumno/a en su segundo trimestre'))
    tercerNota = parseFloat(prompt('Ingrese la nota que tiene el/la alumno/a en su tercer trimestre'))

    if (primerNota,segundaNota,tercerNota){
    alert (`El promedio de este/a alumno/a es: ${calculoPromedio(primerNota,segundaNota,tercerNota*3/3)}`)
    pregunta = prompt('¿Desea calcular otro promedio? En ese caso, por favor, escriba "Si"').toLowerCase()}    

    if (isNaN(primerNota) || isNaN(segundaNota) || isNaN(tercerNota)) {
        alert ('Numero no valido. Por favor, ingrese un numero valido')
    }

} while ((isNaN(primerNota)) || (isNaN(segundaNota)) || (isNaN(tercerNota)) || pregunta == 'si' )



