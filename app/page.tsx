"use client";
import Image from "next/image";
import Link from "../app/componentes/link";
import Categoria from "@/app/componentes/categoria";
/* import Teoria from "@/app/teoria"; */
import "./styles/app.css"
import Ojos from "@/app/componentes/ojos";
export default function Inicio() {
  return (
  
    <main className="mainprincipal">    
    <div className="flex justify-end p-2"><Link nombre="🫵 I highly recommend to install this extension!" direccion="https://lumetrium.com/definer"/> 
    </div> <h1 className='titulo'>-EnglishRepo-</h1>
<div className='claseMain'>
<Categoria t="Grammar" path="/teoria" />
<div className= "separador"/>
{/* <Categoria t="Exercises" path= "/practica" />
<div className= "separador"/> */}
<Categoria t="Activities" path="/extra" />
</div>
<div className='centrarOjos'>
<Ojos/>
<Ojos/>
    </div></main>
    
  );
}