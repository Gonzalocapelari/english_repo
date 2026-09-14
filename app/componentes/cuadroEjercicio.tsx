"use client";
import React, { useState } from 'react';
import '../styles/cuadroEjercicio.css';

interface actividad {
    id: string,
    sentencia: string,
    opcion1: string,
    opcion2: string,
    correcta: number,
}

interface propsEjercicio {
  actividad: actividad;
}

export default function CuadroEjercicio({ actividad }: propsEjercicio) {
  // Estado inicial vacío
  const [estado, setEstado] = useState('neutro');

  function check(respuesta: number) {
    if (respuesta === actividad.correcta) {
      setEstado('correcto');
    } else {
      setEstado('incorrecto');
    }
  }

  return (
    <div className={`ejercicio ${estado}`}>
      <p className='enunciado'>{actividad.sentencia}</p>
      <button className="buttonRespuesta" onClick={() => check(1)}>{actividad.opcion1}</button>
      <button className="buttonRespuesta" onClick={() => check(2)}>{actividad.opcion2}</button>
    </div>
  );
}