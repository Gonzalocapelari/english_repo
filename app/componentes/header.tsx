import "../styles/header.css"
export default function Header(){


    return(
        <div className="header">
            <section className="burger"><div className="barra"></div>
            <div style={{height: "2px"}}/>
            <div className="barra"></div>
            <div style={{height: "2px"}}/>
            <div className="barra"></div></section>
            <ul className="listaHeader">
                <li><button className="botonHEAD">Inicio</button></li>
                <div style={{height: "6px"}}/>
                <li><button className="botonHEAD">Teoria</button></li>
                <div style={{height: "6px"}}/>
                <li><button className="botonHEAD">Practica</button></li>
                <div style={{height: "6px"}}/>
                <li><button className="botonHEAD">Sobre mi</button></li>
                </ul>
        </div>
    );
}