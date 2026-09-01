"use client";
import Campo from "@/app/componentes/campo";
import Botonatras from "@/app/componentes/botonatras";

export default function Extra() {
    
return(    <ul>
        <li><Campo recurso="1" descripcion="desc1"/></li>
        <li><Campo recurso="2" descripcion="desc2"/></li>
        <li><Campo recurso="3" descripcion="desc3"/></li>
        <li><Campo recurso="4" descripcion="desc4"/></li>
        <li><Campo recurso="5" descripcion="desc5"/></li>
        <li><Campo recurso="6" descripcion="desc6"/></li>
        <li><Botonatras/></li>
    </ul>
    )


};