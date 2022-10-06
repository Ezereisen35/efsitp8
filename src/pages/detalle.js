import { getActiveElement } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { useParams } from 'react-router-dom';
import Personas from '../Personas';

export default function Detalle() {
  const { id } = useParams();
  let personaSeleccionada = Personas.find(Persona => Persona.id === id)
  
  return (
    <>
      <p>{personaSeleccionada.nombre} {personaSeleccionada.apellido}</p>
      <p>Edad: {personaSeleccionada.edad} años</p>
      <p>Email: {personaSeleccionada.email}</p>
    </>
  )
}