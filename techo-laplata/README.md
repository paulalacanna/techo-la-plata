# TECHO La Plata — Implementación (Etapa 3)

Sitio en HTML y CSS propios, sin frameworks. Abrir `index.html` en el navegador.

```
index.html        Estructura semántica de una sola página
css/estilos.css   Toda la hoja de estilos (mobile first, BEM en español)
js/menu.js        Solo abre/cierra el menú hamburguesa (sin JS el menú queda visible)
img/              Ilustraciones provisorias: reemplazar por fotos reales
```

## Cómo se cumple cada requerimiento

**1. Custom properties.** Todas las variables de la Etapa 2.1 (colores, escala tipográfica y
espaciado) están en `:root`, con los mismos nombres. Los media queries solo cambian el valor de
`--espacio-borde-pagina`, `--grilla-columnas` y `--grilla-gap`.

**2. CSS Grid.**
- `body`: `grid-template-rows: auto 1fr auto` (encabezado, contenido, pie).
- `.grilla`: `repeat(var(--grilla-columnas), minmax(0, 1fr))`, es decir 4 columnas en mobile,
  8 desde 768 px y 12 desde 1024 px. Cada hijo ocupa todo el ancho por defecto y cada
  organismo declara sus columnas según la tabla de la Etapa 2.3 (por ejemplo, el hero ocupa las
  col. 1–7 y 8–12, y las actividades usan `span 4`).
- Flexbox se usa solo dentro de los componentes (tarjetas, menú, botones, redes).

**3. Container queries.**
- `.grilla-actividades__item` es contenedor (`container-type: inline-size`). Si la tarjeta
  mide 32rem o más, la imagen pasa al costado; si es más angosta, queda arriba. Se ve
  entre 560 y 767 px: hay una sola columna, pero es tan ancha que una tarjeta vertical
  quedaría con una imagen enorme.
- `.grilla-barrios__item` funciona igual: desde 20rem usa una miniatura al costado (mobile y
  tablet), y en desktop, con cuatro por fila, la tarjeta es vertical.

**4. Responsivo.** Probado en 375, 600, 800 y 1280 px, sin scroll horizontal.

**5. HTML semántico.** `header`, `nav`, `main`, `section` (con `aria-labelledby`), `article`
para cada tarjeta, `footer`, un solo `h1` y después `h2` y `h3` en orden. Cada formulario
tiene su `label for`. También hay un enlace para saltar al contenido y textos ocultos que
aclaran los botones repetidos («Inscribirme a…»).

## Pendiente antes de entregar
- Reemplazar las ilustraciones de `img/` por fotos reales (y completar su `alt`).
- Confirmar las actividades, barrios, mail y redes: hoy son datos de ejemplo.
