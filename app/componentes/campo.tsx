import "../styles/campo.css"
import { useRouter } from 'next/navigation'
import React, {useState} from 'react';
interface campoProps{
    descripcion:string
    recurso:string //aca le digo el tipo en el interface
}
export default function Campo ({recurso, descripcion}:campoProps) {
  const router = useRouter();

  const [mostrarLista, setMostrarLista] = useState(false); //bool


function accion() {
    // router.push(recurso);

    setMostrarLista(!mostrarLista);
}
    return (<>
        <button className= "campoButton" onClick={accion}> {recurso} </button>
        <h2 className = 'desc'>{descripcion}</h2>
        <ul style={{ display: mostrarLista ? 'block' : 'none' }}>
        <li><a href="null">link1</a></li>
        <li><a href="null">link1</a></li>
        <li><a href="null">link1</a></li>
        <li><a href="null">link1</a></li>
        <li><a href="null">link1</a></li>
      </ul>
    </>
  );
}
