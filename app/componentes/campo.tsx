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
    nomlink6?: string;
    dirlink6?: string;
    nomlink7?: string;
    dirlink7?: string;
    nomlink8?: string;
    dirlink8?: string;
    nomlink9?: string;
    dirlink9?: string;
    nomlink10?: string;
    dirlink10?: string;
}

export default function Campo({
    recurso, 
    descripcion,
    nomlink1, dirlink1,
    nomlink2, dirlink2,
    nomlink3, dirlink3,
    nomlink4, dirlink4,
    nomlink5, dirlink5,
    nomlink6, dirlink6,
    nomlink7, dirlink7,
    nomlink8, dirlink8,
    nomlink9, dirlink9,
    nomlink10, dirlink10
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
                {nomlink6 && dirlink6 && <li><Link nombre={nomlink6} direccion={dirlink6} /></li>}
                {nomlink7 && dirlink7 && <li><Link nombre={nomlink7} direccion={dirlink7} /></li>}
                {nomlink8 && dirlink8 && <li><Link nombre={nomlink8} direccion={dirlink8} /></li>}
                {nomlink9 && dirlink9 && <li><Link nombre={nomlink9} direccion={dirlink9} /></li>}
                {nomlink10 && dirlink10 && <li><Link nombre={nomlink10} direccion={dirlink10} /></li>}
            </ul>
        </div></div>
    );
}