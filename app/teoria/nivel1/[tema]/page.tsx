import "../../../styles/paginaLink.css";
import Botonatras from "@/app/componentes/botonatras";
import CuadroEjercicio from "@/app/componentes/cuadroEjercicio";
//esta pagina actua como un componente pero a su vez es una pagina, raro
// Agregas { params } como propiedad del componente

//El datosTemas: RECORD sirve para indicar que es un diccioinario (un map en c++)
            //  Record<clave,valor>
const datosTemas: Record<string, any> = {
    "verbotobe": {
        titulo: "Verbo to be",
        introduccion: "Esta es la base asi que presta atención, fijate como se usa I, YOU, WE y THEY para decir yo, el, nosotros y ellos. Además si lees con detenimiento la imagen vas a darte cuenta de que se puede separar en 3 categorías este primer tema, estas categorias son: [POSITIVE (+)] para afirmaciones, [NEGATIVE (-)] para negaciones y de la misma manera existe [yes/no Questions (?)] para preguntas en forma NEGATIVA y POSITIVA.",
            imgTeoria1: "/teoria1/verbotobe1.png", 
            imgTeoria2: "/teoria1/verbotobe2.png",
            introduccion2: "En la imagen de arriba hay un apartado TIP donde te muestra algunas abreviaciones como i am -> i'm, lo mismo para el is (que significa ES) su abreviatura sería ('s). Ahora para la parte de abajo vas a ver los usos del IS, ISN'T, ARE O AREN'T para decir que una persona (es) o (no es) de una nacionalidad.",
        imgEj1: "/imagenes/tobe-ej1.jpg",
        imgEj2: "/imagenes/tobe-ej2.jpg", 
        anotacion: "¿Notaste cómo se estructuran las preguntas con WH?, [pregunta con WH] + [verbo to be] + [preposicion] (depende de que quieras preguntar) ejemplos: -Where are you from? -What ARE you DOING? -What IS that? -When DO we work?, (nótese que utilicé DO el cual es un tema que quizás aún no conozcas pero se utiliza en este contexto para hablar de rutina, en otros contextos puede significar HACER)"
    },
/*     "saludos": {
        titulo: "Saludos básicos",
        introduccion: "",
        imgTeoria: "/imagenes/saludos-teoria.jpg",
        imgEj1: "/imagenes/saludos-ej1.jpg",c
        imgEj2: "/imagenes/saludos-ej2.jpg",
        anotacion: "Hello es formal, Hi es informal."
    }, */
    
};
interface actividad{
        id: string,
        sentencia: string,
        opcion1: string,
        opcion2: string,
        correcta: number,
}
const listaActividades: actividad[] = [
     { id: "verbotobe2",
       sentencia: "Lets say Michael Michael its a Doctor... which one is correct?",
       opcion1: "Michael is a doctor",
       opcion2: "Michael are a doctor",
       correcta: 1
    },

         { id: "verbotobe2",
       sentencia: "Pay atention to wh- questions... ¿Cómo preguntarías de donde son ellos?",
       opcion1: "Where are they from?",
       opcion2: "Where is she from?",
       correcta: 1
    }
]

export default async function PaginaDinamica({ params }: { params: Promise<{ tema: string }>}) {
    const parametros = await params;
    const temaActual = parametros.tema;
    const contenido = datosTemas[temaActual];

if (!contenido) {
        return (
            <main>
                <div className="granContenedor">
                    <h1>Tema no encontrado</h1>
                    <Botonatras />
                </div>
            </main>
        );
    } 

    return (
        <main>
            <h1>Teoría del tema: {contenido.titulo}</h1>
            
            <div className="granContenedor">
                
                {/* BLOQUE 1 */}
                <div className="bloqueSeccion">
                    <div className="teoriaYTexto">
                        <img src={contenido.imgTeoria1} alt={`Teoría 1 de ${contenido.titulo}`} className="imagenTeoria" />
                        <p className="paragraph">{contenido.introduccion}</p>
                    </div>
                    <section className="ejercicioComplementario">
                        <CuadroEjercicio actividad={listaActividades[0]} />
                        {/* <h3>Ejercicio 1</h3>
                        <img src={contenido.imgEj1} alt="Ejercicio 1" width="100%" /> */}
                    </section>
                </div>

                {/* BLOQUE 2 */}
                <div className="bloqueSeccion">
                    <div className="teoriaYTexto">
                        <img src={contenido.imgTeoria2} alt={`Teoría 2 de ${contenido.titulo}`} className="imagenTeoria" />
                        <p className="paragraph">{contenido.introduccion2}</p>
                    </div>
                    <section className="ejercicioComplementario">
                        <CuadroEjercicio actividad={listaActividades[1]} />
                    </section>
                </div>

                {/* ANOTACIONES FINALES */}
                <section className="anotaciones">
                    <h3>Anotaciones:</h3>
                    <p>{contenido.anotacion}</p>
                </section>
                
                <Botonatras />
            </div>
        </main>
    );
}

