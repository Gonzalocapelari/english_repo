"use client";
import { useRouter } from "next/navigation";
import "../styles/botonLink.css"
interface linkProps {
    nombre: string;
    direccion: string;
}

export default function Link({ nombre, direccion }: linkProps) {
    const router = useRouter();

    function push_a() {
        router.push(direccion);
    }

    return (
        <button className="botonLink" onClick={push_a}>
            {nombre}
        </button>
    );
}