// app/teoria.tsx
"use client";
import Campo from "@/app/componentes/campo";
import Botonatras from "@/app/componentes/botonatras";
import "../styles/teoria.css"

export default function Teoria() {
  // Estructuramos todos los datos en un arreglo de objetos
  const datosCampos = [
    {
      recurso: "LEVEL ONE (A1)",
      descripcion: "Master the fundamental building blocks of English. Build a solid foundation by learning how to describe daily routines, ask basic questions, talk about possessions, and express what is happening right now.",
      nomlink1: "Present simple and prepositions of time", dirlink1: "/teoria/nivel1/presentsimple",
      nomlink2: "Singular/Plural Nouns & Imperatives", dirlink2: "/teoria/nivel1/nounsandimperatives",
      nomlink3: "Possessives & Have got", dirlink3: "/teoria/nivel1/possessivesandhavegot",
      nomlink4: "Question Words & Adverbs of Frequency", dirlink4: "teoria/nivel1/questionsandfrequency",
      nomlink5: "There is / There are & Quantifiers", dirlink5: "teoria/nivel1/quantifiersandthereis",
      nomlink6: "Present Continuous", dirlink6: "teoria/nivel1/presentcontinuous",
    },
    {
      recurso: "LEVEL TWO (A2)",
      descripcion: "Expand your communication skills by stepping outside the present moment. Learn to describe past events, compare people and things, and understand the nuanced differences between verb tenses.",
      nomlink1: "Present simple vs Present continuos & Dynamic and stative verbs", dirlink1: "teoria/nivel2/simplevscontinuous",
      nomlink2: "Comparative and Superlative Adjectives", dirlink2: "teoria/nivel2/comparativesandsuperlatives",
      nomlink3: "Past Simple (+ Irregular verbs list)", dirlink3: "teoria/nivel2/pastsimple",
      nomlink4: "Be going to", dirlink4: "teoria/nivel2/begoingto",
      nomlink5: "Will", dirlink5: "teoria/nivel2/will",
      nomlink6: "Present Perfect", dirlink6: "teoria/nivel2/presentperfect",
    },
    {
      recurso: "LEVEL THREE (B1)",
      descripcion: "",
      nomlink1: "Pasado Simple", dirlink1: "/teoria/nivel3/pasado",
      nomlink2: "Futuro", dirlink2: "/teoria/nivel3/futuro",
    },
  ];

  return (
    <main className="mainteoria">
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
    </ul>
    </main>
  );
}