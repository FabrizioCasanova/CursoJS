class alumnos {
    constructor(nombre, apellido, nota) {
        this.nombre = nombre
        this.apellido = apellido
        this.nota = nota
    }
}

const alumno1 = new alumnos("Juan", "Valdez", 7)
const alumno2 = new alumnos("Pedro", "Castro", 8)
const alumno3 = new alumnos("Valeria", "Rojas", 8.50)
const alumno4 = new alumnos("Flor", "Quinteros", 7.50)
const alumno5 = new alumnos("Nestor", "Leprich", 9.50)

const alumnosAprob = [alumno1, alumno2, alumno3, alumno4, alumno5]

function alumnosAprobados() {
    let listaAlumnos = ""
    for (let i = 0; i < 5; i++) {
        listaAlumnos = listaAlumnos + "\n\n" + alumnosAprob[i].nombre + "  " + alumnosAprob[i].apellido + " Nota: " + alumnosAprob[i].nota;
    }
    alert(`Los/las alumnos/as aprobados/as son: ${listaAlumnos}`)
}

function sacarPromedio() {

    const sumaDeNotas = (nota1, nota2, nota3) => nota1 + nota2 + nota3

    let primerNota, segundaNota, tercerNota
    let pregunta 

    do {

        do {
            primerNota = parseFloat(prompt('Ingrese la nota que tiene el/la alumno/a en su primer trimestre'))

            if (isNaN(primerNota)) {
                alert('Numero no valido. Por favor, ingrese un numero valido')
            }

        } while ((isNaN(primerNota)));

        do {
            segundaNota = parseFloat(prompt('Ingrese la nota que tiene el/la alumno/a en su segundo trimestre'))

            if (isNaN(segundaNota)) {
                alert('Numero no valido. Por favor, ingrese un numero valido')
            }

        } while ((isNaN(segundaNota)));

        do {
            tercerNota = parseFloat(prompt('Ingrese la nota que tiene el/la alumno/a en su tercer trimestre'))

            if (isNaN(tercerNota)) {
                alert('Numero no valido. Por favor, ingrese un numero valido')
            }

        } while ((isNaN(tercerNota)));

        alert (`El promedio de este/a alumno/a es: ${sumaDeNotas(primerNota,segundaNota,tercerNota*3/3)}`)

        do {
        pregunta = prompt('¿Desea calcular otro promedio? ("Si"|"No")').toLowerCase()
        } while (pregunta != 'si' && pregunta != 'no');

    } while ( pregunta == 'si');

}

do {
    seña = prompt("Bienvenido/a, por favor ingrese una opcion:\n\n 1 - Alumnos aprobados\n 2 - Sacar promedio de nota")
    switch (seña) {
        case '1':
            alumnosAprobados();
            break;
        case '2':
            sacarPromedio();
            break;
        default:
            alert("No reconocimos este comando")
            break;
    }
} while (seña != '2')