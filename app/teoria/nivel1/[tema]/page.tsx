import "../../../styles/paginaLink.css";
import Botonatras from "@/app/componentes/botonatras";

// Agregas { params } como propiedad del componente
export default function PaginaDinamica({ params }: {params: {tema: string}}) {
    const temaActual = params.tema;

    return (
        <main>
            <div className="granContenedor">
                <section className="contenidoTeoria">
                    {/* Ejemplo de uso del parámetro en tu vista */}
                    <h1>Teoría del tema: {temaActual}</h1>
                </section>
                
                <div className="contenedor2">
                    <section className="ejercicioComplementario"></section>
                    <section className="ejercicioComplementario"></section>
                    <section className="anotaciones"></section>
                </div>
                
                <Botonatras />
            </div>
        </main>
    );
}