# EnglishRepo — Propuestas de Mejora y Sugerencias

> Sugerencias técnicas derivadas del análisis del código de `english_repo.zip`.
> Enfocadas en mejorar la accesibilidad (A11y), el rendimiento y la escalabilidad del proyecto en Next.js.

---

## 1. Accesibilidad (A11y) y Experiencia de Usuario

* **Reemplazar navegación por botones con enlaces semánticos:** Componentes como `Link`, `Categoria` y `Header` utilizan etiquetas `<button>` combinadas con `router.push()`. Para mejorar el SEO, permitir la interacción de lectores de pantalla y dejar que el usuario abra las secciones en pestañas nuevas (clic derecho / rueda del mouse), es altamente recomendable sustituirlos por el componente nativo `<Link href="...">` de Next.js.
* **Semántica en el Header:** Actualmente el menú es un contenedor `<div>` con botones. Lo ideal es reemplazar esta estructura por etiquetas semánticas: un contenedor `<nav>` que aloje una lista `<ul>`, donde cada ítem sea un `<li>` con una etiqueta `<a>` (o `<Link>` de Next.js).
* **Atributos accesibles en elementos interactivos:**
  * En `botonatras.tsx`, el botón solo muestra el símbolo `<`. Es vital agregarle un atributo `aria-label="Volver atrás"` para que los lectores de pantalla puedan interpretar su función (y no lean literalmente "menor que").
  * En `campo.tsx`, la tarjeta desplegable debería incluir `aria-expanded={mostrarLista}` para indicar a las tecnologías de asistencia si el menú acordeón está abierto o cerrado.
* **Textos alternativos (`alt`) en imágenes:** En la lección dinámica (`[tema]/page.tsx`), las imágenes deben tener descripciones claras y concisas en el atributo `alt`. Actualmente o no lo tienen, o son genéricos.

---

## 2. Eficiencia y Rendimiento

* **Migrar a `next/image`:** Las imágenes de la lección teórica y los recursos estáticos se cargan con etiquetas HTML clásicas `<img>`. Cambiarlas por el componente `<Image />` nativo de Next.js aplicará compresión automática (a formatos modernos como WebP/AVIF), evitará el salto de diseño (Cumulative Layout Shift) y optimizará la carga en dispositivos móviles (Lazy Loading).
* **Optimizar el listener de `ojos.tsx`:** El componente actual guarda las coordenadas `{x, y}` en un estado de React en cada evento `mousemove` individual, lo que dispara múltiples re-renderizados por segundo en la página principal. Una solución más eficiente es usar `requestAnimationFrame` o manipular directamente la propiedad `transform` del DOM a través de un `useRef`, evitando así que todo el componente se vuelva a renderizar con cada micro-movimiento del mouse.
* **Limpiar dependencias no utilizadas:** La librería `react-router-dom` está instalada en el `package.json` pero no se utiliza en ningún lugar, ya que Next.js proporciona su propio enrutador nativo (App Router). Desinstalarla reducirá el peso de `node_modules` y evitará confusiones futuras.

---

## 3. Practicidad y Mantenibilidad del Código

* **Declarar directivas `"use client"` faltantes:** Archivos como `campo.tsx` y `ojos.tsx` utilizan hooks (`useState`, `useEffect`) pero no tienen la directiva `"use client"` en la primera línea. Aunque funcionan porque sus padres ya son componentes cliente, agregar la directiva es una buena práctica que prevendrá roturas si en el futuro decides renderizarlos dentro de un Server Component.
* **Estructurar los enlaces de `Campo` en un array:** En lugar de recibir propiedades sueltas como `nomlink1`, `dirlink1` hasta llegar al 5, es mucho más limpio que el componente reciba un único arreglo de objetos: `links: { nombre: string; url: string }[]`. Esto permite recorrerlos con un simple `.map()`, hace el componente más legible y elimina el límite estricto de máximo 5 enlaces.
* **Separar los datos (Data Logic) de la Interfaz (UI):** El diccionario `datosTemas` y la lista `datosCampos` están escritos directamente dentro de la lógica visual de las páginas. Mover estos objetos a archivos independientes (por ejemplo, `src/data/niveles.ts` o `src/data/temas.ts`) limpiará el código de React y hará que sea mucho más sencillo agregar el contenido de los niveles del 2 al 7.
* **Resolver errores de tipado y linter (ESLint/TypeScript):**
  * Eliminar el tipo inexistente `(params:type)` en `app/practica/page.tsx` que causa errores de compilación (`tsc`).
  * En el archivo `[tema]/page.tsx`, reemplazar el tipado genérico `Record<string, any>` por una interfaz de TypeScript estricta que defina la estructura real de un tema (`titulo: string; introduccion: string; ...`).
  * Eliminar importaciones que no se están utilizando (como `Image`, `useState` o el `router` en algunos componentes) basándose en las advertencias de ESLint para mantener un código pulido.