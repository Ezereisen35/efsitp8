import Personas from '../Personas';
import React from "react"

export default function Estadisticas() {
    let mayoresEdad = 0;
    let personaMasGrande = [{edad: 0}]
    let personaMasChica = [{edad: 100}]

    for (let i = 0; i < Personas.length; i++) {
        if (Personas[i].edad > 35) {
            mayoresEdad++;
        }

        if (personaMasGrande[0].edad < Personas[i].edad) {
            personaMasGrande = [Personas[i]]
        }
        else if (personaMasGrande[0].edad === Personas[i].edad) {
            personaMasGrande.push(Personas[i])
        }

        if (personaMasChica[0].edad > Personas[i].edad) {
            personaMasChica = [Personas[i]]
        }
        else if (personaMasChica[0].edad === Personas[i].edad) {
            personaMasChica.push(Personas[i])
        }
        console.log(Personas[i].edad)
    }

    let textoGrande = "Las personas más grandes es: " + personaMasGrande[0].nombre;

    if (personaMasGrande.length > 1) {
        textoGrande = "Las personas más grandes son: ";
        personaMasGrande.forEach(Persona => {
            textoGrande += Persona.nombre + ", "
        });
        textoGrande = textoGrande.slice(0, -2)
    }

    let textoChico = "La persona más chica es: " + personaMasChica[0].nombre;

    if (personaMasChica.length > 1) {
        textoChico = "Las personas más chicas son: ";
        personaMasChica.forEach(Persona => {
            textoChico += Persona.nombre + " ,"
        });
        textoChico = textoChico.slice(-2);
    }

    return (
        <>
            <p>La cantidad de personas mayores de 35 son: {mayoresEdad}</p>
            <p>{textoGrande}</p>
            <p>{textoChico}</p>
        </>
    )
}