# Pinta Conmigo

Página web para niños: eligen un dibujo por categoría, lo pintan en línea y pueden guardarlo como imagen o imprimir solo la silueta para colorear a mano.

**Pruébala aquí: https://alejandrotoro.github.io/pinta-conmigo/**

## Funciones

- **Categorías**: Animales, Dinosaurios, Vehículos, Espacio, Mar y Castillos, con 10 dibujos cada una en tres niveles (Fácil, Medio y Difícil).
- **Pintar en línea**: paleta de 12 colores, 3 tamaños de pincel y borrador. Funciona con mouse, dedo o lápiz. Las líneas del dibujo siempre quedan encima de los colores.
- **Deshacer**: botón o `Ctrl/Cmd + Z` (hasta 30 pasos).
- **Guardar**: descarga el dibujo pintado como PNG.
- **Imprimir siluetas**: imprime en tamaño carta solo las líneas negras, con un espacio para el nombre.

## Estructura

```
index.html        Vistas de inicio, pintura y hoja de impresión
css/styles.css    Estilos (incluye @media print)
js/drawings.js    Catálogo de categorías y dibujos (SVG)
js/app.js         Rutas, lienzo, deshacer, guardar e imprimir
```

## Agregar un dibujo

En `js/drawings.js`, añade un objeto a `DRAWINGS`:

```js
{
  id: 'perro', name: 'Perrito', category: 'animales', level: 'Fácil', tint: '#FFF3E3',
  svg: '<circle cx="60" cy="50" r="30"/> ...'  // solo trazos, viewBox 0 0 120 100
}
```

## Correr localmente

No requiere build. Abre `index.html` en el navegador o sirve la carpeta:

```bash
npx serve .
```

Se puede publicar en cualquier hosting estático (GitHub Pages, Netlify, Vercel, Cloudflare Pages).
