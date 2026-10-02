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
      descripcion: "First steps into the most relevant basics",
      nomlink1: "Present simple and prepositions of time", dirlink1: "/teoria/nivel1/presentsimple",
      nomlink2: "Singular/Plural Nouns & Imperatives", dirlink2: "/teoria/nivel1/nounsandimperatives",
      nomlink3: "Possessives & Have got", dirlink3: "/teoria/nivel1/possessivesandhavegot",
      nomlink4: "Question Words & Adverbs of Frequency", dirlink4: "teoria/nivel1/questionsandfrequency",
      nomlink5: "There is / There are & Quantifiers", dirlink5: "teoria/nivel1/quantifiersandthereis",
      nomlink6: "Present Continuous", dirlink6: "teoria/nivel1/presentcontinuous",
      nomlink7: "Present simple vs Present continuos & Dynamic and stative verbs", dirlink7: "teoria/nivel1/simplevscontinuous"
    },
    {
      recurso: "LEVEL TWO (A2)",
      descripcion: "Estructuras para hablar del día a día, expresar lo que te gusta y hacer preguntas básicas",
      nomlink1: "Presente Simple", dirlink1: "/teoria/nivel2/presente",
      nomlink2: "Rutinas", dirlink2: "/teoria/nivel2/rutinas",
    },
    {
      recurso: "LEVEL THREE (A1+)",
      descripcion: "Herramientas para contar lo que hiciste en el pasado, comparar cosas y hablar de proyectos a futuro",
      nomlink1: "Pasado Simple", dirlink1: "/teoria/nivel3/pasado",
      nomlink2: "Futuro", dirlink2: "/teoria/nivel3/futuro",
    },
    {
      recurso: "LEVEL FOUR (A1/A2)",
      descripcion: "Diferenciación entre lo que ocurre ahora y lo habitual, junto con descripciones detalladas de acciones pasadas",
      nomlink1: "Presente Continuo", dirlink1: "/teoria/nivel4/presente-continuo",
    },
    {
      recurso: "LEVEL FIVE (A2/B1)",
      descripcion: "Uso de tiempos compuestos, situaciones condicionales reales y verbos para dar consejos u obligaciones",
      nomlink1: "Condicional 1", dirlink1: "/teoria/nivel5/condicional1",
    },
    {
      recurso: "LEVEL SIX (B1)",
      descripcion: "Situaciones hipotéticas y transmisión de mensajes",
      nomlink1: "Reported Speech", dirlink1: "/teoria/nivel6/reported-speech",
    },
    {
      recurso: "LEVEL SEVEN (B2)",
      descripcion: "Fluidez y estructuras complejas. Gramática avanzada para analizar eventos del pasado que no ocurrieron",
      nomlink1: "Tiempos Perfectos", dirlink1: "/teoria/nivel7/perfectos",
    }
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