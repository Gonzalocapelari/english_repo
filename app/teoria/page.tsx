// app/teoria.tsx
"use client";
import Campo from "@/app/componentes/campo";
import Botonatras from "@/app/componentes/botonatras";
import "../styles/teoria.css"

export default function Teoria() {
  // Estructuramos todos los datos en un arreglo de objetos
  const datosCampos = [
    {
      recurso: "Nivel 1",
      descripcion: "Bases para presentarse, nombrar objetos cotidianos y formar las primeras oraciones simples",
      nomlink1: "Verbo To Be", dirlink1: "/teoria/nivel1/link1",
      nomlink2: "Saludos", dirlink2: "/teoria/nivel1/saludos",
      // Puedes agregar nomlink3, dirlink3, hasta el 5 según necesites
    },
    {
      recurso: "Nivel 2 (A1)",
      descripcion: "Estructuras para hablar del día a día, expresar lo que te gusta y hacer preguntas básicas",
      nomlink1: "Presente Simple", dirlink1: "/teoria/nivel2/presente",
      nomlink2: "Rutinas", dirlink2: "/teoria/nivel2/rutinas",
    },
    {
      recurso: "Nivel 3 (A1+)",
      descripcion: "Herramientas para contar lo que hiciste en el pasado, comparar cosas y hablar de proyectos a futuro",
      nomlink1: "Pasado Simple", dirlink1: "/teoria/nivel3/pasado",
      nomlink2: "Futuro", dirlink2: "/teoria/nivel3/futuro",
    },
    {
      recurso: "Nivel 4 (A1/A2)",
      descripcion: "Diferenciación entre lo que ocurre ahora y lo habitual, junto con descripciones detalladas de acciones pasadas",
      nomlink1: "Presente Continuo", dirlink1: "/teoria/nivel4/presente-continuo",
    },
    {
      recurso: "Nivel 5 (A2/B1)",
      descripcion: "Uso de tiempos compuestos, situaciones condicionales reales y verbos para dar consejos u obligaciones",
      nomlink1: "Condicional 1", dirlink1: "/teoria/nivel5/condicional1",
    },
    {
      recurso: "Nivel 6 (B1)",
      descripcion: "Situaciones hipotéticas y transmisión de mensajes",
      nomlink1: "Reported Speech", dirlink1: "/teoria/nivel6/reported-speech",
    },
    {
      recurso: "Nivel 7 (B2)",
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