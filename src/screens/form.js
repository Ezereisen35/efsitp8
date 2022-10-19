import React from "react"
export default function Form() {
    return (
        <form action="/">
            <input type="text" name="nombre" placeholder="Nombre" />
            <input type="text" name="apellido" placeholder="Apellido" />
            <input type="number" name="edad" placeholder="Edad" />
            <input type="text" name="mail" placeholder="Email" />
            <input type="submit" />
        </form>
    )
}