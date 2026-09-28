"use client";
import Image from "next/image";
import Categoria from "@/app/componentes/categoria";
/* import Teoria from "@/app/teoria"; */
import "./styles/app.css"
import Ojos from "@/app/componentes/ojos";
export default function Inicio() {
  return (
  
    <main className="mainprincipal">      <h1 className='titulo'>-EnglishRepo-</h1>
<div className='claseMain'>

<Categoria t="Grammar" path="/teoria" />
<div className= "separador"/>
<Categoria t="Exercises" path= "/practica" />
<div className= "separador"/>
<Categoria t="Extra" path="/extra" />
</div>
<div className='centrarOjos'>
<Ojos/>
<Ojos/>
    </div></main>
    
  );
}