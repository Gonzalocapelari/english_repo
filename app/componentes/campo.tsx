import "../styles/campo.css"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react';
import  Link  from "@/app/componentes/link";

interface campoProps {
    descripcion: string;
    recurso: string;
    nomlink1?: string;
    dirlink1?: string;
    nomlink2?: string;
    dirlink2?: string;
    nomlink3?: string;
    dirlink3?: string;
    nomlink4?: string;
    dirlink4?: string;
    nomlink5?: string;
    dirlink5?: string;
}

export default function Campo({
    recurso, 
    descripcion,
    nomlink1, dirlink1,
    nomlink2, dirlink2,
    nomlink3, dirlink3,
    nomlink4, dirlink4,
    nomlink5, dirlink5
}: campoProps) {
    
    const router = useRouter();
    const [mostrarLista, setMostrarLista] = useState(false);

    function accion() {
        setMostrarLista(!mostrarLista);
    }

    return (
<div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="paquete"> 

            <div className="cabecera-tarjeta" onClick={accion}>
                <h3 className="campoButton">{recurso}</h3>
                <p className='desc'>{descripcion}</p>
            </div>

            <ul className="claseLista" style={{ display: mostrarLista ? 'block' : 'none' }}>
                {nomlink1 && dirlink1 && <li><Link nombre={nomlink1} direccion={dirlink1} /></li>}
                {nomlink2 && dirlink2 && <li><Link nombre={nomlink2} direccion={dirlink2} /></li>}
                {nomlink3 && dirlink3 && <li><Link nombre={nomlink3} direccion={dirlink3} /></li>}
                {nomlink4 && dirlink4 && <li><Link nombre={nomlink4} direccion={dirlink4} /></li>}
                {nomlink5 && dirlink5 && <li><Link nombre={nomlink5} direccion={dirlink5} /></li>}
            </ul>
        </div></div>
    );
}