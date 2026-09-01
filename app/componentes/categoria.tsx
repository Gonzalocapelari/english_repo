// app/categoria.tsx
'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'
import '../styles/app.css';
import Link from "next/link";
interface categoriaProps {
 t :string
 path: string
}
 
export default function Categoria({t,path}:categoriaProps) {
 // const [text, setText] = useState(t);//unnnecesary
  const router = useRouter();

function clickear() {//logica
router.push(path);
}

console.log({path})  

  return (
    <button className="categoria_boton" onClick={clickear}>
    {t} </button>
    );
}
