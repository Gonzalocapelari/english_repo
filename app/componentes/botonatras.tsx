import { useRouter } from "next/navigation";
import "../styles/botonAtras.css"

export default function Botonatras(){

const router = useRouter();
const caracter = '<';
function goBack() {
router.push('./');    
}

    return(
   <button className='atrasButton'
    onClick={goBack}>{caracter}</button>   
    );
};