//keep track of the mouse [x]
//calcular donde deben mirar los ojos con la pos del mouse [x]
//crear transform(?) supongo en css o rotate. [x]
import { useState, useEffect, useRef } from 'react';
import "../styles/ojos.css"
export default function Ojos() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const globoRef = useRef(null); // Referencia para saber dónde está el ojo en la pantalla

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Limpiamos el evento cuando se desmonta el componente (buena práctica)
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []); 
//console.log(mousePosition)
  // --- MATEMÁTICA PARA EL OJO ---
  let movimientoPupila = { x: 0, y: 0 };
  const limiteMovimiento = 15; // Límite en píxeles para que la pupila no se salga del globo. (Ajustalo según tu CSS).

  if (globoRef.current) {
    // 1. Obtenemos la caja del globo y buscamos su centro exacto.
    const rect = globoRef.current.getBoundingClientRect();
    const centroX = rect.left + rect.width / 2;
    const centroY = rect.top + rect.height / 2;

    // 2. Calculamos la distancia (catetos) entre el mouse y el centro del ojo.
    const deltaX = mousePosition.x - centroX;
    const deltaY = mousePosition.y - centroY;

    // 3. Sacamos el ángulo hacia donde tiene que mirar el ojo usando trigonometría (Math.atan2).
    const angulo = Math.atan2(deltaY, deltaX);

    // 4. Calculamos la distancia real entre el centro y el mouse (hipotenusa).
    const distanciaAlMouse = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // 5. Limitamos la distancia. Si el mouse está lejos, la pupila frena en 'limiteMovimiento'. Si está cerca, lo sigue.
    const distanciaFinal = Math.min(distanciaAlMouse, limiteMovimiento);

    // 6. Volvemos a convertir el ángulo y la distancia final en coordenadas X e Y para mover el div.
    movimientoPupila.x = Math.cos(angulo) * distanciaFinal;
    movimientoPupila.y = Math.sin(angulo) * distanciaFinal;
  }

  return (
     <div className="caja"> <div className="globo" ref={globoRef}>
        <div 
          className="pupila" 
          style={{ 
            // Aplicamos el cálculo usando un transform translate
            transform: `translate(${movimientoPupila.x}px, ${movimientoPupila.y}px)` 
          }}
        >
        </div>
      </div>
    </div>
  );
}