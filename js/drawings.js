// Catálogo de dibujos. Cada dibujo es una silueta SVG en un viewBox de 120x100.
// Para agregar uno nuevo: añade un objeto a DRAWINGS con id, nombre, categoría,
// dificultad, color de fondo de la tarjeta y el contenido SVG (solo trazos).

window.CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'animales', label: 'Animales' },
  { id: 'dinosaurios', label: 'Dinosaurios' },
  { id: 'vehiculos', label: 'Vehículos' },
  { id: 'espacio', label: 'Espacio' },
  { id: 'mar', label: 'Mar' },
  { id: 'castillos', label: 'Castillos' }
];

window.DRAWINGS = [
  {
    id: 'gatito', name: 'Gatito', category: 'animales', level: 'Fácil', tint: '#FFF3E3',
    svg: '<polygon points="34,42 38,12 56,30"/><polygon points="86,42 82,12 64,30"/><circle cx="60" cy="58" r="30"/><circle cx="49" cy="54" r="4"/><circle cx="71" cy="54" r="4"/><path d="M56 64 L60 68 L64 64 Z"/><path d="M60 68 Q55 74 50 71 M60 68 Q65 74 70 71"/><path d="M44 64 L22 60 M44 68 L22 70 M76 64 L98 60 M76 68 L98 70"/>'
  },
  {
    id: 'mariposa', name: 'Mariposa', category: 'animales', level: 'Fácil', tint: '#FFF3E3',
    svg: '<path d="M60 30 C40 6 12 14 18 40 C22 54 44 54 60 48"/><path d="M60 30 C80 6 108 14 102 40 C98 54 76 54 60 48"/><path d="M60 50 C44 56 26 70 36 84 C46 94 58 76 60 62"/><path d="M60 50 C76 56 94 70 84 84 C74 94 62 76 60 62"/><line x1="60" y1="26" x2="60" y2="80"/><path d="M60 26 Q54 14 48 12 M60 26 Q66 14 72 12"/><circle cx="34" cy="34" r="6"/><circle cx="86" cy="34" r="6"/>'
  },
  {
    id: 'dino', name: 'Dino amigo', category: 'dinosaurios', level: 'Medio', tint: '#E6F8EE',
    svg: '<path d="M8 72 Q30 66 40 54 Q50 40 66 44 Q72 30 80 22 Q94 14 104 22 Q108 30 100 34 L88 36 Q84 46 86 58 Q88 70 80 76 L78 88 L70 88 L70 78 Q60 80 52 78 L50 88 L42 88 L42 76 Q28 78 8 72 Z"/><circle cx="94" cy="24" r="2.5"/><path d="M86 48 L94 52"/><path d="M50 50 L54 42 L58 48 L62 40 L66 46"/>'
  },
  {
    id: 'carro', name: 'Carro veloz', category: 'vehiculos', level: 'Fácil', tint: '#E8F1FF',
    svg: '<path d="M10 70 L10 56 Q10 50 18 48 L34 46 L46 30 Q50 26 58 26 L80 26 Q86 26 90 32 L100 46 Q110 48 110 56 L110 70 Z"/><path d="M50 44 L56 32 L70 32 L70 44 Z M76 44 L76 32 L86 32 L92 44 Z"/><circle cx="34" cy="72" r="11"/><circle cx="88" cy="72" r="11"/><circle cx="34" cy="72" r="4"/><circle cx="88" cy="72" r="4"/>'
  },
  {
    id: 'cohete', name: 'Cohete', category: 'espacio', level: 'Fácil', tint: '#EEEAFF',
    svg: '<path d="M60 6 Q78 24 76 64 L44 64 Q42 24 60 6 Z"/><circle cx="60" cy="34" r="8"/><path d="M44 50 L30 66 L44 64 M76 50 L90 66 L76 64"/><path d="M50 64 L52 72 L68 72 L70 64"/><path d="M54 72 Q60 94 66 72"/><path d="M20 20 L20 28 M16 24 L24 24 M98 40 L98 48 M94 44 L102 44"/>'
  },
  {
    id: 'planeta', name: 'Planeta', category: 'espacio', level: 'Fácil', tint: '#EEEAFF',
    svg: '<circle cx="60" cy="50" r="24"/><ellipse cx="60" cy="54" rx="48" ry="12"/><path d="M44 40 Q52 36 58 42 M64 58 Q70 62 76 56"/><circle cx="16" cy="18" r="3"/><circle cx="104" cy="84" r="3"/><path d="M100 14 L100 24 M95 19 L105 19"/>'
  },
  {
    id: 'pez', name: 'Pececito', category: 'mar', level: 'Fácil', tint: '#E3F6FB',
    svg: '<path d="M14 50 Q40 18 76 34 Q86 40 88 50 Q86 60 76 66 Q40 82 14 50 Z"/><path d="M88 50 L108 32 L104 50 L108 68 Z"/><circle cx="32" cy="46" r="4"/><path d="M48 34 Q56 50 48 66 M60 32 Q68 50 60 68"/><path d="M46 30 Q54 16 66 26"/><circle cx="24" cy="24" r="3"/><circle cx="16" cy="14" r="2"/>'
  },
  {
    id: 'castillo', name: 'Castillo', category: 'castillos', level: 'Medio', tint: '#FFEDF2',
    svg: '<path d="M14 92 L14 28 L20 28 L20 34 L26 34 L26 28 L32 28 L32 92"/><path d="M88 92 L88 28 L94 28 L94 34 L100 34 L100 28 L106 28 L106 92"/><path d="M32 92 L32 50 L38 50 L38 44 L46 44 L46 50 L54 50 L54 44 L66 44 L66 50 L74 50 L74 44 L82 44 L82 50 L88 50"/><path d="M14 92 L106 92"/><path d="M50 92 L50 72 Q60 60 70 72 L70 92"/><path d="M23 28 L23 10 L36 16 L23 20"/><path d="M97 28 L97 10 L110 16 L97 20"/>'
  }
];

// Devuelve el SVG completo de un dibujo, listo para usar como <img> o inline.
window.drawingSvg = function (drawing, opts) {
  opts = opts || {};
  var stroke = opts.stroke || '#1F2140';
  var width = opts.strokeWidth || 3;
  var size = opts.size ? ' width="' + opts.size[0] + '" height="' + opts.size[1] + '"' : '';
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100"' + size + '>' +
    '<g fill="none" stroke="' + stroke + '" stroke-width="' + width + '" stroke-linecap="round" stroke-linejoin="round">' +
    drawing.svg + '</g></svg>';
};
