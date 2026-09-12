"use client"
import "../styles/header.css"
import { useRouter } from "next/navigation";
export default function Header(){
const router = useRouter();
function ira(dir:number){
switch(dir){
    case 1: router.push("/");
    break;
        case 2: router.push("/teoria/");
        break;
                case 3: router.push("/practica/");
                break;
                        case 4: router.push("/extra/");
                        break;
                                case 5: router.push("7")
}
}
    return(
        /* Aclaracion, normalmente se usa <nav> combinado con una <ul> y <a> con hrefs pero no sabía y lo hice con un div y botones */
        <div className="header">
            <section className="burger"><div className="barra"></div>
            <div style={{height: "2px"}}/>
            <div className="barra"></div>
            <div style={{height: "2px"}}/>
            <div className="barra"></div></section>
            <ul className="listaHeader">
                <li><button className="botonHEAD" onClick={() => ira(1)}>Inicio</button></li>
                <div style={{height: "6px"}}/>
                <li><button className="botonHEAD" onClick={() => ira(2)}>Teoria</button></li>
                <div style={{height: "6px"}}/>
                <li><button className="botonHEAD " onClick={() => ira(3)}>Practica</button></li>
                <div style={{height: "6px"}}/>
                <li><button className="botonHEAD" onClick={() => ira(4)}>Extra</button></li>
                <div style={{height: "6px"}}/>
                <li><button className="botonHEAD" onClick={() => ira(5)}>Sobre mi</button></li>
                </ul>
        </div>
    );
}