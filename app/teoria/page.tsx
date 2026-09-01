// app/teoria.tsx
"use client";
import Campo from "@/app/componentes/campo";
import Botonatras from "@/app/componentes/botonatras";

export default function Teoria() {
var desc = [];

function setDescripcion() {
    desc[0] = "nivel 1: Contenido basico como verbo to be, can/can't, etc";
    desc[1] = "nivel 2:";
    desc[2] = "nivel 3:";
    desc[3] = "nivel 4:";
    desc[4] = "nivel 5:";
    desc[5] = "nivel 6:";

}
setDescripcion();
    return(
    <ul>
        <li><Campo recurso="1" descripcion={desc[0]}/></li>
        <li><Campo recurso="2" descripcion={desc[1]}/></li>
        <li><Campo recurso="3" descripcion={desc[2]}/></li>
        <li><Campo recurso="4" descripcion={desc[3]}/></li>
        <li><Campo recurso="5" descripcion={desc[4]}/></li>
        <li><Campo recurso="6" descripcion={desc[5]}/></li>
        <li><Botonatras/></li>    </ul>
    
    )
}
