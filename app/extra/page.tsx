"use client";
import Campo from "@/app/componentes/campo";
import Botonatras from "@/app/componentes/botonatras";
import "../styles/extra.css"
const datosCampos = [
    {
      recurso: "Video fragments with its translation",
      descripcion: "You will be able to improve your listening by paying attention to the clip first without reading the translation, and then you can read the translation to check your understanding.",
      nomlink1: "Watch Video Fragments",
      dirlink1: "/extra/VideosPage"
    },
    {recurso: "Tongue Twisters", 
    descripcion: "You will be able to practice your pronunciation and fluency by repeating tongue twisters.",
    nomlink1: "Practice Tongue Twisters",
    dirlink1: "/extra/TongueTwisters"
    },
    {
      recurso: "Quotes with context",
      descripcion: "You will be able to read a quote and then check the context of the highlighted word to understand its meaning in that specific context.",
      nomlink1: "Read Contextual Quotes",
      dirlink1: "/extra/QuotesPage"
    }];

export default function Extra() {
  return (<main className="extraBackground">
<ul className="ulCampos">
      {/* Recorremos el arreglo y pasamos todas las propiedades juntas con ...campo */}
      {datosCampos.map((campo, index) => (
        <li key={index}>
          <Campo {...campo} />
        </li>
      ))}
      <li>
        <Botonatras />
      </li>
    </ul></main>);
    }

   
        //   .map() turns each object in the array into one <li>. "key" must
        //   be unique per item so React can track each one efficiently —
        //   that's exactly what the "id" field in our data is for. */
      

   
      
