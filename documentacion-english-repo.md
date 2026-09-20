# EnglishRepo — Documentación técnica

> Análisis del código de `english_repo.zip` · 19/09/2026
> Explica **qué hace** cada parte del proyecto y **por qué** está implementada así.
> Los "por qué" se deducen del código y de los comentarios del propio autor. Las propuestas de mejora no forman parte de este documento.

## Índice

1. Visión general
2. Configuración raíz
3. Layout raíz y estilos globales
4. Página de Inicio
5. Componentes (`app/componentes/`)
6. Teoría: índice de niveles
7. Teoría: página de tema dinámica
8. Práctica y Extra
9. Estilos por componente (`app/styles/`)
10. Recursos estáticos
11. Límites Server / Client
12. Verificación automática (`tsc` y ESLint)

---

## 1. Visión general

**Qué es:** un sitio web educativo para aprender inglés, con interfaz en español. Tiene tres secciones: **Teoría**, **Práctica** y **Extra**.

**Estado del contenido:** Teoría muestra un índice de 7 niveles y tiene **una** lección completa (*Verbo To Be*, nivel 1). Práctica y Extra son maquetas con datos de relleno (`desc1` … `desc6`).

### Stack

| Tecnología | Versión | Uso en el proyecto |
|---|---|---|
| Next.js (App Router) | 16.3.3 | Enrutado por carpetas dentro de `app/` |
| React | 19.2.8 | Componentes y estado local |
| TypeScript | ^5 (`strict`) | Tipado de props y datos |
| Tailwind CSS | ^4 | Solo se importa en `globals.css`; los estilos son CSS propio |
| ESLint | ^9 + `eslint-config-next` 16.3.3 | Análisis estático |

### Estructura de carpetas

```
english_repo/
├── app/
│   ├── layout.tsx            Layout raíz (Header + fuentes + metadata)
│   ├── page.tsx              Inicio
│   ├── globals.css           Tailwind + variables de color
│   ├── favicon.ico
│   ├── componentes/          categoria, campo, link, botonatras, header, cuadroEjercicio, ojos
│   ├── styles/               Un .css por componente o página
│   ├── recursos/             logo_englishrepo.png, fondo.png
│   ├── teoria/
│   │   ├── page.tsx          Índice de niveles
│   │   └── nivel1/[tema]/page.tsx   Lección dinámica
│   ├── practica/page.tsx
│   └── extra/page.tsx
├── public/
│   ├── teoria1/              verbotobe1.png, verbotobe2.png
│   └── *.svg                 Restos de la plantilla de Next
└── (archivos de configuración raíz)
```

### Mapa de rutas

| Ruta | Archivo | Estado |
|---|---|---|
| `/` | `app/page.tsx` | Funciona |
| `/teoria` | `app/teoria/page.tsx` | Funciona (índice) |
| `/teoria/nivel1/verbotobe` | `app/teoria/nivel1/[tema]/page.tsx` | Única lección con contenido |
| `/teoria/nivel1/saludos`, `/teoria/nivel1/presentesimple` | mismo archivo | Muestra "Tema no encontrado" (no hay datos) |
| `/teoria/nivel2/…` a `/teoria/nivel7/…` | — | No existen (404) |
| `/practica` | `app/practica/page.tsx` | Maqueta |
| `/extra` | `app/extra/page.tsx` | Maqueta |
| "Sobre mi" (botón del Header) | — | Sin ruta: el botón navega a `"7"` |

### Flujo de navegación

- El **Header** (menú que aparece al pasar el mouse) y los **botones circulares** de Inicio llevan a Teoría, Práctica y Extra.
- En Teoría, cada tarjeta (**Campo**) se despliega y muestra enlaces (**Link**) a los temas.
- Dentro de un tema, **Botonatras** vuelve a la página anterior.

---

## 2. Configuración raíz

| Archivo | Qué hace | Por qué |
|---|---|---|
| `package.json` | Scripts `dev`, `build`, `start`, `lint`. Dependencias: `next`, `react`, `react-dom` y `react-router-dom` ^7.18.3 (**no se importa en ningún archivo**). Dev: Tailwind 4, TypeScript 5, ESLint 9, tipos de React y Node. | Estructura estándar de `create-next-app`. |
| `tsconfig.json` | TypeScript `strict`, `moduleResolution: bundler`, `jsx: react-jsx`, plugin de Next y alias `@/*` → raíz del proyecto. | El alias permite importar como `@/app/componentes/header` en lugar de rutas relativas largas. `include` incorpora los tipos que genera Next (`.next/types`). |
| `next.config.ts` | Configuración vacía. | Por ahora se usan los valores por defecto. |
| `eslint.config.mjs` | ESLint 9 (flat config) con `core-web-vitals` y reglas de TypeScript de `eslint-config-next`. Ignora `.next`, `out`, `build` y `next-env.d.ts`. | Detecta problemas típicos de rendimiento, accesibilidad y tipado en proyectos Next. |
| `postcss.config.mjs` | Registra `@tailwindcss/postcss`. | Tailwind 4 se integra como plugin de PostCSS. |
| `.gitignore` | Ignora `node_modules`, `.next`, `.env*`, `next-env.d.ts`, etc. | Evita versionar dependencias, builds y secretos. |
| `AGENTS.md` / `CLAUDE.md` | Los genera `next dev`. Piden a los asistentes de IA consultar la documentación incluida en `node_modules/next/dist/docs/` antes de escribir código. `CLAUDE.md` solo contiene `@AGENTS.md`. | Esta versión de Next tiene cambios respecto a versiones anteriores; el archivo evita que un asistente use APIs desactualizadas. |
| `README.md` | Texto por defecto de `create-next-app`. | Sin personalizar. |

---

## 3. Layout raíz y estilos globales

### `app/layout.tsx`

**Qué hace**
- Carga las fuentes **Geist** y **Geist Mono** con `next/font/google` y las expone como variables CSS (`--font-geist-sans`, `--font-geist-mono`).
- Importa `globals.css` y define `metadata` (título y descripción; hoy con los valores de la plantilla: *"Create Next App"*).
- Renderiza `<html lang="en">` y un `<body className="min-h-full flex flex-col">` que contiene `<Header />` seguido de `{children}`.
- Tipa sus props con `LayoutProps<"/">`, un tipo global que genera Next (`next dev`, `next build` o `next typegen`).

**Por qué así**
- Un layout raíz **persiste entre navegaciones**: el Header se monta una vez y no se recrea al cambiar de página.
- `flex flex-col` en el `body` deja el contenido apilado debajo del Header.
- `next/font` descarga y autoaloja la fuente en build, sin peticiones a Google en tiempo de ejecución.

### `app/globals.css`

**Qué hace**
- `@import "tailwindcss"` activa Tailwind 4 (incluye su *preflight*, un reset de estilos).
- `:root` define `--background` / `--foreground` (claro por defecto; oscuros dentro de `@media (prefers-color-scheme: dark)`).
- `@theme inline` expone esos valores y las fuentes como tokens de Tailwind (`--color-background`, `--font-sans`, `--font-mono`).
- `body` aplica las variables y `font-family: Arial, Helvetica, sans-serif`.

**Por qué así**
- Es la base que genera `create-next-app` con Tailwind. El *preflight* explica por qué botones, listas y encabezados llegan sin estilo y cada componente los estiliza a mano en su propio CSS.

---

## 4. Página de Inicio — `app/page.tsx`

**Qué hace**
- Componente cliente (`"use client"`) que renderiza `<main className="mainprincipal">` con:
  - un `<h1 className="titulo">-EnglishRepo-</h1>` (cambia de color en bucle al pasar el mouse);
  - tres `<Categoria>`: **Teoria** → `/teoria`, **Practica** → `/practica`, **EXTRA** → `/extra`, separadas por `<div className="separador"/>`;
  - dos `<Ojos/>` centrados (`.centrarOjos`).
- Importa `app/styles/app.css`.

**Por qué así**
- Es `"use client"` porque `Ojos` usa hooks (`useState`, `useEffect`, `useRef`) y no declara su propia directiva; al marcar la página como cliente, todo su subárbol lo es.
- Quedan residuos: el import de `Image` no se usa y el import de `Teoria` está comentado.

---

## 5. Componentes (`app/componentes/`)

### 5.1 `categoria.tsx` — botón circular de sección

- **Props:** `t` (texto), `path` (ruta destino).
- **Qué hace:** renderiza un `<button className="categoria_boton">` (círculo de 200 px) y, al hacer clic, ejecuta `router.push(path)` con `useRouter` de `next/navigation`. Contiene un `console.log({path})` en cada render.
- **Por qué así:** es un componente reutilizable para los tres accesos de Inicio; usa navegación programática en lugar de un enlace. Tiene imports sin uso (`useState`, `Link` de `next/link`).

### 5.2 `header.tsx` — barra superior

- **Qué hace:**
  - `ira(dir: number)` recibe un número y, con un `switch`, navega a `/`, `/teoria/`, `/practica/`, `/extra/`; el caso 5 ("Sobre mi") ejecuta `router.push("7")`.
  - Renderiza una barra `.header` (60 px) con una sección `.burger` que muestra el logo como **imagen de fondo CSS**, y una lista `.listaHeader` con cinco botones (Inicio, Teoria, Practica, Extra, Sobre mi).
  - Entre los `<li>` hay `<div style={{height:"6px"}}/>` como espaciadores.
  - El menú está oculto (`opacity: 0; visibility: hidden`) y aparece con `.header:hover` (el logo se desvanece a la vez).
- **Por qué así:** el comentario del código explica que normalmente se usa `<nav>` + `<ul>` + `<a>`, pero se resolvió con `div` y botones porque en ese momento no se conocía esa estructura. El menú desplegable con animación de opacidad/desplazamiento resuelve el "menú hamburguesa" solo con CSS.

### 5.3 `campo.tsx` — tarjeta desplegable (acordeón)

- **Props:** `recurso` (título), `descripcion`, y hasta cinco pares opcionales `nomlinkN` / `dirlinkN` (N = 1…5).
- **Qué hace:**
  - Guarda `mostrarLista` (`useState(false)`); `accion()` lo invierte al hacer clic en `.cabecera-tarjeta`.
  - Muestra título (`<h3>`) y descripción; debajo, una `<ul className="claseLista">` cuyo `display` alterna entre `block` y `none` con un estilo en línea.
  - Cada `<li>` con un `<Link>` se renderiza solo si existen **ambos** datos (`nomlinkN && dirlinkN`).
  - Envuelve todo en un `div` flex centrado y en una tarjeta `.paquete`.
- **Por qué así:** el estado local basta porque abrir/cerrar no necesita compartirse. El renderizado condicional permite tarjetas con 0 a 5 enlaces sin componentes distintos. La lista queda montada y solo se oculta con CSS; la animación `mostrarLista` se dispara cada vez que pasa de `none` a `block`.
- **Sin directiva `"use client"` propia:** funciona porque todas las páginas que lo importan son cliente. Tiene `useRouter` y `React` importados sin uso.

### 5.4 `link.tsx` — enlace interno (propio)

- **Props:** `nombre`, `direccion`.
- **Qué hace:** `<button className="botonLink">` que ejecuta `router.push(direccion)`.
- **Por qué así:** encapsula la navegación programática de cada tema. Su nombre coincide con el de `next/link`, que no se usa aquí.

### 5.5 `botonatras.tsx` — botón "volver"

- **Props:** `path?` (opcional).
- **Qué hace:** si no recibe `path`, ejecuta `router.back()` (página anterior del historial); si lo recibe, `router.push(path)`. Muestra el carácter `<` dentro de `.atrasButton`, centrado en un `div` flex.
- **Por qué así:** un único botón cubre "volver atrás" y "ir a una ruta concreta". En las páginas actuales nunca se le pasa `path`.

### 5.6 `cuadroEjercicio.tsx` — ejercicio de dos opciones

- **Props:** `actividad` con `{ id, sentencia, opcion1, opcion2, correcta }`.
- **Qué hace:**
  - `estado` (`useState('neutro')`) vale `'neutro'`, `'correcto'` o `'incorrecto'`.
  - `check(respuesta)` compara la opción pulsada (1 o 2) con `actividad.correcta` y cambia el estado.
  - Renderiza la sentencia y dos botones; la tarjeta usa la clase `ejercicio ${estado}`, que cambia el degradado (morado → verde o rojo).
- **Por qué así:** el estado local basta porque el resultado no se guarda ni se comparte. Derivar la clase CSS del estado mantiene la lógica de colores en el CSS. `correcta` es **el número de opción** (1 o 2), no un índice base 0.
- **Tipos:** la interfaz `actividad` está declarada aquí y también, duplicada, en la página de tema.

### 5.7 `ojos.tsx` — ojos que siguen el mouse

- **Qué hace:**
  - Un `useEffect` registra un listener `mousemove` en `window` que guarda `{x, y}` en el estado y lo elimina al desmontar.
  - En cada render calcula, a partir de `getBoundingClientRect()` del `.globo`, el centro del ojo; con `Math.atan2` obtiene el ángulo hacia el mouse y con Pitágoras la distancia.
  - Limita la distancia a `limiteMovimiento = 15` px (`Math.min`) y convierte ángulo + distancia en `x`/`y` con `cos`/`sin`.
  - Aplica `transform: translate(x px, y px)` a `.pupila`.
- **Por qué así:** la trigonometría mantiene la pupila dentro del globo del ojo sin importar dónde esté el cursor; el tope evita que se salga. Limpiar el listener evita fugas de memoria. Los comentarios del archivo (con casillas `[x]`) documentan el plan original: seguir el mouse → calcular hacia dónde mirar → aplicar `transform`.
- **Sin `"use client"` propio:** depende de que su padre (`page.tsx`) sea cliente.

---

## 6. Teoría: índice de niveles — `app/teoria/page.tsx`

**Qué hace**
- Componente cliente que define `datosCampos`, un arreglo de 7 objetos (`recurso`, `descripcion`, `nomlink1…5`, `dirlink1…5`) con los niveles: Nivel 1, Nivel 2 (A1), Nivel 3 (A1+), Nivel 4 (A1/A2), Nivel 5 (A2/B1), Nivel 6 (B1), Nivel 7 (B2).
- Los recorre con `.map` y pinta `<li><Campo {...campo} /></li>` dentro de `<ul className="ulCampos">`; al final agrega un `<Botonatras />`.
- Importa `app/styles/teoria.css`.

**Por qué así**
- Como indica el comentario del código, se "estructuran todos los datos en un arreglo de objetos" y se pasan con el operador *spread* (`{...campo}`): evita escribir siete `<Campo>` a mano y hace que agregar un nivel sea añadir un objeto.
- Se usa `key={index}`.

**Destinos de los enlaces:** solo `/teoria/nivel1/verbotobe` tiene contenido. "Saludos" aparece tres veces en el Nivel 1 (mismo destino), y los niveles 2 a 7 apuntan a rutas que aún no existen.

---

## 7. Teoría: página de tema dinámica — `app/teoria/nivel1/[tema]/page.tsx`

**Qué hace**
- Es un **Server Component asíncrono** (sin `"use client"`). Recibe `params` como `Promise<{ tema: string }>` y lo espera con `await`.
- `datosTemas: Record<string, any>` funciona como un diccionario `slug → contenido`. Hoy solo existe `verbotobe` con `titulo`, `introduccion`, `introduccion2`, `imgTeoria1`, `imgTeoria2`, `anotacion` (más `imgEj1` e `imgEj2`, que no se usan). Hay una entrada `saludos` comentada.
- `interface actividad` y `listaActividades` definen dos ejercicios (verbo *to be* y preguntas con *wh-*).
- Si el tema no existe, muestra "Tema no encontrado" y un `<Botonatras />`.
- Si existe, renderiza: `<h1>` con el título; **bloque 1** (imagen + párrafo + `CuadroEjercicio` con `listaActividades[0]`); **bloque 2** (imagen + párrafo + `CuadroEjercicio` con `listaActividades[1]`); una sección de **anotaciones** y el botón de volver.
- Importa `app/styles/paginaLink.css`.

**Por qué así**
- Un solo archivo sirve a todos los temas gracias al segmento dinámico `[tema]`. Un `Record` (diccionario) permite buscar el contenido por slug en O(1).
- `params` es una `Promise` porque así funciona el App Router desde Next 15; por eso la función es `async`.
- La página se mantiene como Server Component porque no usa hooks; solo sus hijos `CuadroEjercicio` y `Botonatras` son componentes cliente.
- Las imágenes se referencian con rutas absolutas desde `public/` (`/teoria1/verbotobe1.png`).

**Límites actuales:** el diseño asume exactamente 2 imágenes y 2 ejercicios por tema; los ejercicios se eligen por posición fija (`[0]`, `[1]`) sin relación con el tema; ambos comparten `id: "verbotobe2"`.

---

## 8. Práctica y Extra — `app/practica/page.tsx`, `app/extra/page.tsx`

**Qué hacen:** cada página renderiza una `<ul>` con seis `<Campo recurso="1"…"6" descripcion="desc1"…"desc6" />` y un `<Botonatras />`, todos dentro de `<li>`. No pasan enlaces, así que al desplegar una tarjeta la lista queda vacía.

**Por qué así:** son maquetas para comprobar el diseño antes de tener contenido real.

**Detalle técnico:** `Practica` declara `(params:type)`, un tipo que no existe (error de TypeScript, ver sección 12). Ninguna de las dos usa `<main>` ni el fondo oscuro que sí tiene Teoría.

---

## 9. Estilos por componente (`app/styles/`)

Cada componente o página importa su propio `.css` (`import "../styles/x.css"`). Son **hojas globales** (no CSS Modules): los nombres de clase, y los selectores de elemento, son globales.

| Archivo | Qué estiliza | Detalles relevantes |
|---|---|---|
| `app.css` | Inicio | `.categoria_boton`: círculo 200 px, morado `hsl(271,73%,26%)`, hover más claro con borde translúcido. `.titulo`: al hacer hover ejecuta la animación `ciclo-colores` (2 s, infinita). `.mainprincipal`: fondo `rgb(12,10,34)`, `min-height: 100vh`. |
| `header.css` | Header | Barra de 60 px; `.burger` con el logo de fondo; `.listaHeader` posicionada en absoluto y visible solo con `.header:hover`. `.botonHEAD` de 100 px. |
| `campo.css` | Tarjeta `Campo` | `.paquete` (ancho 50 %, fondo morado translúcido, elevación `translateY(-3px)` en hover), `.cabecera-tarjeta`, `.campoButton`, `.desc`, `.claseLista` y la animación `mostrarLista`. |
| `botonLink.css` | `Link` | Color del texto y fondo translúcido en hover. |
| `botonAtras.css` | `Botonatras` | Botón translúcido de 50 % de ancho con elevación en hover. |
| `cuadroEjercicio.css` | Ejercicio | `.ejercicio.neutro` / `.correcto` / `.incorrecto` (degradados morado, verde, rojo), `.buttonRespuesta` (120 px), `.enunciado`. |
| `ojos.css` | Ojos | `.globo` (100 px, blanco), `.pupila` (50 px, negro, `transition: transform 0.05s`), `.caja`. |
| `paginaLink.css` | Página de tema | Selectores de elemento `main` y `h1`, `.granContenedor` (máx. 1000 px), `.bloqueSeccion`, `.teoriaYTexto` (`inline-flex`, `width: 150%`), `.imagenTeoria` (50 %), `.paragraph` (25 %), `.anotaciones`. |
| `teoria.css` | Índice de Teoría | `.mainteoria` (fondo oscuro, `min-height: 100vh`) y `.ulCampos`. |

**Por qué así:** un CSS por componente mantiene cada estilo cerca de su uso. La paleta gira en torno al morado (matiz 271) sobre un azul muy oscuro: fondo `rgb(12,10,34)`, primario `hsl(271,73%,26%)`, acento `hsl(271,76%,53%)`, tarjeta `rgba(137,43,226,0.08)`.

---

## 10. Recursos estáticos

| Recurso | Ubicación | Uso |
|---|---|---|
| `verbotobe1.png` (≈ 310 KB), `verbotobe2.png` (≈ 251 KB) | `public/teoria1/` | Imágenes de la lección; se sirven en `/teoria1/…` y se referencian desde `datosTemas`. |
| `logo_englishrepo.png` | `app/recursos/` | Fondo CSS de `.burger` en el Header (el empaquetador lo procesa vía `url()`). |
| `fondo.png` | `app/recursos/` | Sin referencias en el código. |
| `favicon.ico` (≈ 25 KB) | `app/` | Ícono de la pestaña; parece el de la plantilla de Next. |
| `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` | `public/` | Restos de la plantilla; sin referencias. |

**Por qué dos ubicaciones:** lo que está en `public/` se sirve tal cual bajo una URL absoluta; lo que está junto al código (`app/recursos/`) lo procesa el empaquetador cuando se importa o se usa desde CSS.

---

## 11. Límites Server / Client

| Archivo | Tipo | Motivo |
|---|---|---|
| `layout.tsx` | Server | Sin hooks; monta el Header (cliente). |
| `page.tsx` (Inicio) | Cliente (`"use client"`) | Por `Ojos`, que usa hooks. |
| `teoria/page.tsx`, `practica/page.tsx`, `extra/page.tsx` | Cliente (`"use client"`) | Renderizan `Campo`, que usa `useState`. |
| `teoria/nivel1/[tema]/page.tsx` | Server (async) | No usa hooks; solo sus hijos son cliente. |
| `header.tsx`, `categoria.tsx`, `link.tsx`, `botonatras.tsx` | Cliente | Usan `useRouter`. |
| `cuadroEjercicio.tsx` | Cliente | Usa `useState`. |
| `campo.tsx`, `ojos.tsx` | Cliente **por herencia** | Usan hooks pero no declaran `"use client"`; funcionan porque sus padres son cliente. |

---

## 12. Verificación automática (`tsc` y ESLint)

Ejecutada sobre una copia del proyecto; el código original no se modificó.

**`tsc --noEmit` → 1 error**
- `app/practica/page.tsx(4,41)`: `TS2304: Cannot find name 'type'`.

**`eslint .` → 5 errores y 7 advertencias**

| Nivel | Archivo | Regla | Detalle |
|---|---|---|---|
| Error | `componentes/ojos.tsx:24` | `prefer-const` | `movimientoPupila` nunca se reasigna. |
| Error ×3 | `componentes/ojos.tsx:27, 29` | `react-hooks/refs` | Se lee `globoRef.current` durante el render. |
| Error | `teoria/nivel1/[tema]/page.tsx:9` | `@typescript-eslint/no-explicit-any` | `Record<string, any>`. |
| Advertencia | `componentes/campo.tsx:31` | `no-unused-vars` | `router` sin usar. |
| Advertencia ×2 | `componentes/categoria.tsx:3, 6` | `no-unused-vars` | `useState` y `Link` sin usar. |
| Advertencia | `page.tsx:2` | `no-unused-vars` | `Image` sin usar. |
| Advertencia | `practica/page.tsx:4` | `no-unused-vars` | `params` sin usar. |
| Advertencia ×2 | `teoria/nivel1/[tema]/page.tsx:78, 91` | `@next/next/no-img-element` | Se usa `<img>` en lugar de `next/image`. |
