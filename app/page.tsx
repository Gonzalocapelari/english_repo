"use client";
import Image from "next/image";
import Categoria from "@/app/componentes/categoria";
import Teoria from "@/app/teoria";
import "./styles/app.css"

export default function Inicio() {
  return (
  
    <main >      <h1 className='titulo'>-EnglishRepo-</h1>
<div className='claseMain'>

<Categoria t="Teoria" path="/teoria" />
<div className= "separador"/>
<Categoria t="Practica" path= "/practica" />
<div className= "separador"/>
<Categoria t="EXTRA" path="/extra" />
{/* <link href="@/app/teoria">caca</link>  */}
    </div></main>
    
  );
}