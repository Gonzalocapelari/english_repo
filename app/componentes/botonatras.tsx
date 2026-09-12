'use client'
import { useRouter } from "next/navigation";
import "../styles/botonAtras.css"

interface propOpcional {
    path?: string;
}

export default function Botonatras({ path }: propOpcional) {
    const router = useRouter();
    const caracter = '<';

    function goBack() {
        if (!path) {
            router.back(); 
        } else {
            router.push(path); 
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}><button className='atrasButton' onClick={goBack}>
            {caracter}
        </button></div>
    );
}