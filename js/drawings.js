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
  /* ================= Animales ================= */
  {
    id: 'gatito', name: 'Gatito', category: 'animales', level: 'Fácil', tint: '#FFF3E3',
    svg: '<polygon points="34,42 38,12 56,30"/><polygon points="86,42 82,12 64,30"/><circle cx="60" cy="58" r="30"/><circle cx="49" cy="54" r="4"/><circle cx="71" cy="54" r="4"/><path d="M56 64 L60 68 L64 64 Z"/><path d="M60 68 Q55 74 50 71 M60 68 Q65 74 70 71"/><path d="M44 64 L22 60 M44 68 L22 70 M76 64 L98 60 M76 68 L98 70"/>'
  },
  {
    id: 'mariposa', name: 'Mariposa', category: 'animales', level: 'Fácil', tint: '#FFF3E3',
    svg: '<path d="M60 30 C40 6 12 14 18 40 C22 54 44 54 60 48"/><path d="M60 30 C80 6 108 14 102 40 C98 54 76 54 60 48"/><path d="M60 50 C44 56 26 70 36 84 C46 94 58 76 60 62"/><path d="M60 50 C76 56 94 70 84 84 C74 94 62 76 60 62"/><line x1="60" y1="26" x2="60" y2="80"/><path d="M60 26 Q54 14 48 12 M60 26 Q66 14 72 12"/><circle cx="34" cy="34" r="6"/><circle cx="86" cy="34" r="6"/>'
  },
  {
    id: 'perrito', name: 'Perrito', category: 'animales', level: 'Fácil', tint: '#FFF3E3',
    svg: '<circle cx="60" cy="52" r="28"/><path d="M40 32 Q20 26 16 54 Q16 78 28 76 Q34 70 33 60"/><path d="M80 32 Q100 26 104 54 Q104 78 92 76 Q86 70 87 60"/><circle cx="50" cy="46" r="3.5"/><circle cx="70" cy="46" r="3.5"/><ellipse cx="60" cy="63" rx="13" ry="10"/><path d="M56 58 Q60 55 64 58 Q60 63 56 58 Z"/><path d="M60 62 L60 66 M55 66 Q60 71 65 66"/>'
  },
  {
    id: 'conejo', name: 'Conejito', category: 'animales', level: 'Fácil', tint: '#FFF3E3',
    svg: '<path d="M42 46 Q34 8 48 6 Q60 8 54 39"/><path d="M78 46 Q86 8 72 6 Q60 8 66 39"/><path d="M47 36 Q43 16 48 14 Q52 16 50 36"/><path d="M73 36 Q77 16 72 14 Q68 16 70 36"/><circle cx="60" cy="64" r="26"/><circle cx="51" cy="60" r="3"/><circle cx="69" cy="60" r="3"/><path d="M57 68 L63 68 L60 72 Z"/><path d="M60 72 Q56 78 52 75 M60 72 Q64 78 68 75"/><path d="M48 70 L30 66 M48 74 L30 78 M72 70 L90 66 M72 74 L90 78"/>'
  },
  {
    id: 'caracol', name: 'Caracol', category: 'animales', level: 'Fácil', tint: '#FFF3E3',
    svg: '<circle cx="66" cy="50" r="26"/><path d="M66 52 Q72 46 66 42 Q56 40 54 52 Q56 66 70 64 Q84 58 80 44"/><path d="M41 57 Q32 56 30 44 Q30 30 22 30 Q13 31 14 44 Q12 66 20 76 Q24 82 34 82 L102 82 Q112 82 106 76 L88 64"/><path d="M18 32 L12 17 M26 31 L28 16"/><circle cx="12" cy="14" r="2.5"/><circle cx="28" cy="13" r="2.5"/><circle cx="21" cy="42" r="1.8"/><path d="M17 52 Q21 56 25 52"/>'
  },
  {
    id: 'osito', name: 'Osito', category: 'animales', level: 'Medio', tint: '#FFF3E3',
    svg: '<circle cx="60" cy="34" r="20"/><path d="M44 22 A8 8 0 1 1 52 16"/><path d="M76 22 A8 8 0 1 0 68 16"/><circle cx="52" cy="30" r="2.5"/><circle cx="68" cy="30" r="2.5"/><ellipse cx="60" cy="41" rx="8" ry="6"/><path d="M57 38 L63 38 L60 41 Z"/><path d="M60 41 L60 44"/><path d="M46 49 Q34 58 36 74 Q38 92 60 92 Q82 92 84 74 Q86 58 74 49"/><ellipse cx="60" cy="72" rx="12" ry="12"/><path d="M38 60 Q22 56 18 66 Q20 74 36 70"/><path d="M82 60 Q98 56 102 66 Q100 74 84 70"/><path d="M40 84 Q28 86 30 94 Q40 98 50 91"/><path d="M80 84 Q92 86 90 94 Q80 98 70 91"/>'
  },
  {
    id: 'buho', name: 'Búho', category: 'animales', level: 'Medio', tint: '#FFF3E3',
    svg: '<ellipse cx="60" cy="56" rx="30" ry="36"/><path d="M36 34 L32 12 L50 23"/><path d="M84 34 L88 12 L70 23"/><circle cx="48" cy="44" r="11"/><circle cx="72" cy="44" r="11"/><circle cx="48" cy="44" r="4"/><circle cx="72" cy="44" r="4"/><path d="M56 54 L64 54 L60 62 Z"/><path d="M31 60 Q44 66 40 86"/><path d="M89 60 Q76 66 80 86"/><path d="M52 70 Q56 74 60 70 Q64 74 68 70 M52 78 Q56 82 60 78 Q64 82 68 78"/><path d="M12 94 L108 94"/><path d="M46 94 Q50 88 54 94 M66 94 Q70 88 74 94"/>'
  },
  {
    id: 'elefante', name: 'Elefante', category: 'animales', level: 'Medio', tint: '#FFF3E3',
    svg: '<circle cx="38" cy="42" r="17"/><path d="M52 32 Q70 22 92 30 Q108 38 106 58 L106 86 L94 86 L94 70 Q80 76 66 72 L66 86 L54 86 L54 62 Q54 56 50 54"/><path d="M24 52 Q16 62 18 76 Q20 88 30 86 Q34 82 28 80 Q26 70 34 58"/><path d="M40 32 Q52 30 52 44 Q50 54 42 52 Q38 44 40 32 Z"/><circle cx="30" cy="38" r="2"/><path d="M106 44 Q114 50 110 60"/><path d="M54 82 L66 82 M94 82 L106 82"/>'
  },
  {
    id: 'leon', name: 'León', category: 'animales', level: 'Difícil', tint: '#FFF3E3',
    svg: '<path d="M90 50 Q102 61 86 65 Q91 81 75 76 Q71 92 60 80 Q49 92 45 76 Q29 81 34 65 Q18 61 30 50 Q18 39 34 35 Q29 19 45 24 Q49 8 60 20 Q71 8 75 24 Q91 19 86 35 Q102 39 90 50 Z"/><circle cx="60" cy="50" r="22"/><path d="M42 37 A6 6 0 1 1 50 30"/><path d="M78 37 A6 6 0 1 0 70 30"/><circle cx="52" cy="46" r="2.5"/><circle cx="68" cy="46" r="2.5"/><path d="M56 54 L64 54 L60 59 Z"/><path d="M60 59 Q56 65 51 62 M60 59 Q64 65 69 62"/><path d="M48 58 L41 56 M48 61 L41 63 M72 58 L79 56 M72 61 L79 63"/>'
  },
  {
    id: 'jirafa', name: 'Jirafa', category: 'animales', level: 'Difícil', tint: '#FFF3E3',
    svg: '<path d="M30 14 Q22 16 18 24 Q16 30 22 32 Q30 34 36 28 L52 56 Q50 62 50 68 L50 92 L56 92 L58 74 Q70 78 84 74 L86 92 L92 92 L92 66 Q94 54 84 50 Q72 46 62 48 L42 16 Q38 10 30 14 Z"/><path d="M34 13 L33 7 M39 12 L40 7"/><circle cx="33" cy="5" r="2"/><circle cx="40" cy="5" r="2"/><path d="M42 16 L50 12 L46 21"/><circle cx="28" cy="21" r="1.8"/><path d="M19 28 L24 28"/><path d="M41 30 L47 30 L49 36 L44 37 Z"/><path d="M47 42 L54 41 L57 48 L51 50 Z"/><path d="M60 54 L68 53 L69 61 L61 63 Z"/><path d="M74 56 L82 55 L84 64 L76 66 Z"/><path d="M64 67 L72 66 L72 72 L65 72 Z"/><path d="M92 62 Q102 66 100 78"/><path d="M98 78 L102 85 L96 85 Z"/><path d="M50 88 L56 88 M86 88 L92 88"/>'
  },

  /* ================= Dinosaurios ================= */
  {
    id: 'huevo-dino', name: 'Huevo de dino', category: 'dinosaurios', level: 'Fácil', tint: '#E6F8EE',
    svg: '<path d="M60 10 Q88 14 92 56 Q92 90 60 92 Q28 90 28 56 Q32 14 60 10 Z"/><path d="M29 50 L40 58 L50 48 L60 58 L70 48 L80 58 L91 50"/><circle cx="50" cy="30" r="6"/><circle cx="70" cy="34" r="4"/><circle cx="46" cy="74" r="5"/><circle cx="68" cy="76" r="7"/>'
  },
  {
    id: 'volcan', name: 'Volcán', category: 'dinosaurios', level: 'Fácil', tint: '#E6F8EE',
    svg: '<path d="M10 90 L44 34 Q48 30 52 34 L56 38 L62 32 L68 38 Q72 30 78 36 L110 90"/><path d="M44 34 Q42 48 48 50 Q52 50 52 42 Q56 56 62 54 Q66 52 66 44 Q70 52 74 50 Q80 46 78 36"/><path d="M50 24 Q42 22 44 14 Q48 6 58 10 Q66 4 72 10 Q82 10 80 20 Q78 26 70 24 Q60 30 50 24 Z"/><circle cx="26" cy="30" r="3"/><circle cx="96" cy="26" r="3"/><path d="M4 90 L116 90"/>'
  },
  {
    id: 'cuello-largo', name: 'Cuello largo', category: 'dinosaurios', level: 'Fácil', tint: '#E6F8EE',
    svg: '<path d="M8 70 Q20 62 30 60 Q44 44 62 46 Q72 48 78 54 Q84 40 86 24 Q88 10 100 10 Q110 12 108 20 Q104 26 96 24 Q96 44 92 60 Q90 70 86 74 L86 90 L76 90 L76 78 Q64 82 50 78 L50 90 L40 90 L40 74 Q24 74 8 70 Z"/><circle cx="101" cy="16" r="1.8"/><path d="M100 21 Q104 22 107 19"/><circle cx="52" cy="58" r="4"/><circle cx="66" cy="62" r="3"/><circle cx="60" cy="70" r="2.5"/>'
  },
  {
    id: 'dino', name: 'Dino amigo', category: 'dinosaurios', level: 'Medio', tint: '#E6F8EE',
    svg: '<path d="M8 72 Q30 66 40 54 Q50 40 66 44 Q72 30 80 22 Q94 14 104 22 Q108 30 100 34 L88 36 Q84 46 86 58 Q88 70 80 76 L78 88 L70 88 L70 78 Q60 80 52 78 L50 88 L42 88 L42 76 Q28 78 8 72 Z"/><circle cx="94" cy="24" r="2.5"/><path d="M86 48 L94 52"/><path d="M50 50 L54 42 L58 48 L62 40 L66 46"/>'
  },
  {
    id: 'triceratops', name: 'Triceratops', category: 'dinosaurios', level: 'Medio', tint: '#E6F8EE',
    svg: '<path d="M34 34 Q36 20 50 22 Q64 26 62 44 Q62 58 54 66"/><path d="M34 34 Q30 40 28 46 Q16 50 10 60 Q8 70 18 72 Q38 76 54 66"/><path d="M40 37 Q52 31 54 46 Q54 54 50 60"/><path d="M28 46 L18 28 L36 38"/><path d="M12 58 L8 48 L18 53"/><path d="M10 66 L22 66"/><circle cx="32" cy="52" r="2"/><path d="M62 40 Q78 28 94 36 Q106 42 110 56 Q113 64 116 66 Q110 72 102 68 L102 88 L92 88 L92 74 Q80 78 68 74 L68 88 L58 88 L58 64"/>'
  },
  {
    id: 'estegosaurio', name: 'Estegosaurio', category: 'dinosaurios', level: 'Medio', tint: '#E6F8EE',
    svg: '<path d="M6 66 Q10 58 20 58 Q28 58 34 52 Q50 36 72 40 Q92 44 114 72 Q98 66 90 68 L90 88 L80 88 L80 74 Q64 78 50 74 L50 88 L40 88 L40 70 Q30 70 20 70 Q10 72 6 66 Z"/><circle cx="14" cy="63" r="1.5"/><path d="M36 50 L37 36 L44 44"/><path d="M46 43 L52 24 L59 39"/><path d="M62 39 L70 22 L77 41"/><path d="M80 43 L88 30 L92 50"/><path d="M102 59 L106 48 M107 64 L112 54"/>'
  },
  {
    id: 'pterodactilo', name: 'Pterodáctilo', category: 'dinosaurios', level: 'Medio', tint: '#E6F8EE',
    svg: '<path d="M52 44 Q36 16 6 20 Q14 30 14 40 Q22 38 28 48 Q36 46 40 56 Q46 54 52 62"/><path d="M68 44 Q84 16 114 20 Q106 30 106 40 Q98 38 92 48 Q84 46 80 56 Q74 54 68 62"/><path d="M52 44 Q50 54 52 62 Q54 76 60 84 Q66 76 68 62 Q70 54 68 44"/><path d="M56 78 L52 88 M64 78 L68 88"/><circle cx="60" cy="22" r="9"/><path d="M55 30 L53 44 M65 30 L67 44"/><path d="M52 18 L30 10 L52 26"/><path d="M67 16 L88 6 L69 25"/><circle cx="58" cy="20" r="1.5"/>'
  },
  {
    id: 't-rex', name: 'T-Rex', category: 'dinosaurios', level: 'Difícil', tint: '#E6F8EE',
    svg: '<path d="M14 30 Q14 18 28 16 L44 16 Q54 18 54 30 Q54 36 50 40 Q62 44 70 54 Q84 60 100 58 Q110 56 114 50 Q112 66 98 72 Q86 76 76 74 L78 88 L86 88 L86 94 L66 94 L64 78 Q58 80 52 76 L52 88 L58 88 L58 94 L42 94 L42 72 Q36 62 38 50 L40 42 L30 42 L28 38 L16 38 Q12 36 14 30 Z"/><path d="M16 32 L40 32"/><path d="M18 32 L20 35 L22 32 L24 35 L26 32 L28 35 L30 32 L32 35 L34 32"/><circle cx="40" cy="24" r="2.2"/><circle cx="20" cy="23" r="1"/><path d="M36 19 L44 21"/><path d="M40 54 L32 58 L34 61 M32 58 L30 55"/><path d="M62 50 L60 58 M72 57 L70 65 M84 60 L83 68 M96 60 L96 67"/><path d="M46 94 L46 91 M50 94 L50 91 M70 94 L70 91 M74 94 L74 91"/>'
  },
  {
    id: 'anquilosaurio', name: 'Anquilosaurio', category: 'dinosaurios', level: 'Difícil', tint: '#E6F8EE',
    svg: '<path d="M10 64 Q8 56 16 54 Q24 52 30 56 Q44 36 68 38 Q88 40 96 56 L106 54 Q104 46 110 46 Q116 48 116 56 Q116 64 108 64 L96 66 Q94 72 90 74 L90 86 L80 86 L80 76 L50 76 L50 86 L40 86 L40 74 Q32 72 28 68 L16 70 Q10 70 10 64 Z"/><circle cx="44" cy="53" r="4"/><circle cx="56" cy="49" r="4"/><circle cx="68" cy="49" r="4"/><circle cx="80" cy="53" r="4"/><circle cx="50" cy="64" r="3.5"/><circle cx="62" cy="62" r="3.5"/><circle cx="74" cy="63" r="3.5"/><circle cx="86" cy="64" r="3"/><path d="M40 44 L38 35 L45 41 M54 39 L55 29 L60 38 M70 38 L74 29 L77 39 M86 44 L92 37 L91 47"/><circle cx="17" cy="60" r="1.5"/><path d="M10 65 L17 65"/>'
  },
  {
    id: 'espinosaurio', name: 'Espinosaurio', category: 'dinosaurios', level: 'Difícil', tint: '#E6F8EE',
    svg: '<path d="M112 40 Q112 34 104 32 L92 32 Q84 34 82 42 Q70 44 56 44 Q36 44 6 62 Q30 66 44 68 L44 86 L38 86 L38 92 L54 92 L54 72 Q62 74 70 72 L70 86 L64 86 L64 92 L80 92 L80 66 Q88 58 90 48 L104 48 Q112 46 112 40 Z"/><path d="M78 43 Q72 14 54 12 Q36 14 28 51"/><path d="M70 43 L66 20 M60 44 L56 13 M50 45 L46 16 M40 47 L37 26"/><circle cx="96" cy="37" r="1.8"/><path d="M90 43 L110 43"/><path d="M94 43 L96 46 L98 43 L100 46 L102 43 L104 46 L106 43"/><path d="M82 58 L90 62 L88 65"/>'
  },

  /* ================= Vehículos ================= */
  {
    id: 'carro', name: 'Carro veloz', category: 'vehiculos', level: 'Fácil', tint: '#E8F1FF',
    svg: '<path d="M10 70 L10 56 Q10 50 18 48 L34 46 L46 30 Q50 26 58 26 L80 26 Q86 26 90 32 L100 46 Q110 48 110 56 L110 70 Z"/><path d="M50 44 L56 32 L70 32 L70 44 Z M76 44 L76 32 L86 32 L92 44 Z"/><circle cx="34" cy="72" r="11"/><circle cx="88" cy="72" r="11"/><circle cx="34" cy="72" r="4"/><circle cx="88" cy="72" r="4"/>'
  },
  {
    id: 'bus', name: 'Bus', category: 'vehiculos', level: 'Fácil', tint: '#E8F1FF',
    svg: '<path d="M10 26 Q10 20 16 20 L104 20 Q110 20 110 26 L110 74 L100 74 A12 12 0 0 0 76 74 L44 74 A12 12 0 0 0 20 74 L10 74 Z"/><rect x="16" y="28" width="18" height="18" rx="2"/><rect x="38" y="28" width="18" height="18" rx="2"/><rect x="60" y="28" width="18" height="18" rx="2"/><rect x="82" y="28" width="18" height="18" rx="2"/><path d="M10 54 L110 54"/><circle cx="32" cy="76" r="10"/><circle cx="88" cy="76" r="10"/><circle cx="32" cy="76" r="4"/><circle cx="88" cy="76" r="4"/>'
  },
  {
    id: 'camion', name: 'Camión', category: 'vehiculos', level: 'Fácil', tint: '#E8F1FF',
    svg: '<path d="M8 70 L8 24 L70 24 L70 70 L40 70 A12 12 0 0 0 16 70 Z"/><path d="M70 38 L92 38 Q98 38 102 46 L110 56 L110 70 L102 70 A12 12 0 0 0 78 70 L70 70"/><path d="M76 44 L90 44 L98 56 L76 56 Z"/><path d="M8 36 L70 36"/><circle cx="28" cy="74" r="10"/><circle cx="90" cy="74" r="10"/><circle cx="28" cy="74" r="4"/><circle cx="90" cy="74" r="4"/><circle cx="106" cy="62" r="2.5"/>'
  },
  {
    id: 'globo', name: 'Globo', category: 'vehiculos', level: 'Fácil', tint: '#E8F1FF',
    svg: '<path d="M60 6 Q94 6 96 38 Q96 56 72 70 L48 70 Q24 56 24 38 Q26 6 60 6 Z"/><path d="M60 6 Q44 30 52 70 M60 6 Q76 30 68 70"/><path d="M50 70 L52 80 M70 70 L68 80"/><rect x="50" y="80" width="20" height="14" rx="2"/><path d="M50 86 L70 86"/><path d="M6 78 Q4 70 12 70 Q16 62 24 68 Q32 68 30 78 Z"/><path d="M90 88 Q88 80 96 80 Q100 72 108 78 Q116 78 114 88 Z"/>'
  },
  {
    id: 'avion', name: 'Avión', category: 'vehiculos', level: 'Medio', tint: '#E8F1FF',
    svg: '<path d="M10 52 Q10 44 22 42 L84 42 Q104 42 112 52 Q104 62 84 62 L22 62 Q10 60 10 52 Z"/><path d="M14 44 L8 22 L22 22 L34 42"/><path d="M50 42 L40 18 L54 18 L72 42"/><path d="M50 62 L38 88 L52 88 L72 62"/><circle cx="44" cy="52" r="3"/><circle cx="56" cy="52" r="3"/><circle cx="68" cy="52" r="3"/><circle cx="80" cy="52" r="3"/><path d="M92 46 Q102 46 106 52 L92 52 Z"/>'
  },
  {
    id: 'tren', name: 'Tren', category: 'vehiculos', level: 'Medio', tint: '#E8F1FF',
    svg: '<path d="M10 20 L48 20 L48 24 L10 24 Z"/><path d="M14 24 L14 68 L98 68 L98 46 Q98 40 92 40 L44 40 L44 24"/><path d="M44 40 L44 68"/><rect x="20" y="32" width="18" height="14"/><path d="M78 40 L76 24 L92 24 L90 40"/><path d="M73 20 L95 20 L95 24 L73 24 Z"/><path d="M56 40 Q56 30 62 30 Q68 30 68 40"/><path d="M98 56 L112 68 L98 68"/><circle cx="28" cy="78" r="10"/><circle cx="56" cy="78" r="10"/><circle cx="84" cy="78" r="10"/><circle cx="28" cy="78" r="3"/><circle cx="56" cy="78" r="3"/><circle cx="84" cy="78" r="3"/><path d="M6 90 L114 90"/><circle cx="90" cy="11" r="5"/><circle cx="102" cy="8" r="4"/>'
  },
  {
    id: 'helicoptero', name: 'Helicóptero', category: 'vehiculos', level: 'Medio', tint: '#E8F1FF',
    svg: '<path d="M30 44 Q30 30 50 30 L64 30 Q84 30 88 48 Q90 62 74 64 L46 64 Q30 62 30 44 Z"/><path d="M32 38 L14 34 M30 50 L14 42"/><circle cx="9" cy="38" r="7"/><path d="M62 34 Q80 34 84 50 L62 50 Z"/><path d="M56 30 L56 23"/><ellipse cx="56" cy="20" rx="44" ry="3"/><path d="M44 64 L42 74 M72 64 L74 74 M32 74 L86 74 Q92 74 94 68"/><circle cx="46" cy="46" r="4"/>'
  },
  {
    id: 'tractor', name: 'Tractor', category: 'vehiculos', level: 'Medio', tint: '#E8F1FF',
    svg: '<circle cx="36" cy="66" r="24"/><circle cx="36" cy="66" r="10"/><circle cx="92" cy="76" r="13"/><circle cx="92" cy="76" r="5"/><path d="M28 44 L28 16 L60 16 L60 66"/><path d="M24 12 L64 12 L64 16 L24 16 Z"/><path d="M34 22 L54 22 L54 40 L34 40 Z"/><path d="M60 44 L102 44 Q106 44 106 50 L106 62 L104 70"/><path d="M60 68 L79 74"/><path d="M88 44 L88 26 L94 26 L94 44"/><path d="M98 50 L106 50 M98 56 L106 56"/>'
  },
  {
    id: 'bomberos', name: 'Camión de bomberos', category: 'vehiculos', level: 'Difícil', tint: '#E8F1FF',
    svg: '<path d="M6 40 L72 40 L72 30 L96 30 Q104 30 108 40 L114 52 L114 76 L104 76 A11 11 0 0 0 82 76 L42 76 A11 11 0 0 0 20 76 L6 76 Z"/><path d="M72 40 L72 76"/><path d="M78 36 L94 36 Q100 36 104 46 L78 46 Z"/><circle cx="31" cy="78" r="9"/><circle cx="93" cy="78" r="9"/><circle cx="31" cy="78" r="3.5"/><circle cx="93" cy="78" r="3.5"/><path d="M8 28 L66 28 M8 36 L66 36"/><path d="M14 28 L14 36 M22 28 L22 36 M30 28 L30 36 M38 28 L38 36 M46 28 L46 36 M54 28 L54 36 M62 28 L62 36"/><path d="M11 36 L11 40 M64 36 L64 40"/><path d="M82 30 Q82 24 86 24 Q90 24 90 30"/><rect x="12" y="46" width="16" height="14"/><rect x="32" y="46" width="16" height="14"/><circle cx="60" cy="54" r="8"/><circle cx="60" cy="54" r="3"/><circle cx="109" cy="60" r="2.5"/>'
  },
  {
    id: 'excavadora', name: 'Excavadora', category: 'vehiculos', level: 'Difícil', tint: '#E8F1FF',
    svg: '<path d="M14 78 Q14 68 24 68 L70 68 Q80 68 80 78 Q80 88 70 88 L24 88 Q14 88 14 78 Z"/><circle cx="26" cy="78" r="6"/><circle cx="47" cy="78" r="6"/><circle cx="68" cy="78" r="6"/><path d="M22 68 L22 56 L72 56 L72 68"/><path d="M26 56 L26 30 L52 30 L58 56"/><path d="M31 35 L49 35 L53 50 L31 50 Z"/><path d="M57 50 L79 15 L86 20 L68 56"/><path d="M82 10 L92 10 L108 50 L100 53 Z"/><path d="M98 52 L110 50 L112 62 Q104 70 94 64 Z"/><path d="M96 65 L94 70 M101 67 L100 72 M106 66 L107 71"/><path d="M6 90 L114 90"/><path d="M88 90 Q98 78 112 90"/>'
  },

  /* ================= Espacio ================= */
  {
    id: 'cohete', name: 'Cohete', category: 'espacio', level: 'Fácil', tint: '#EEEAFF',
    svg: '<path d="M60 6 Q78 24 76 64 L44 64 Q42 24 60 6 Z"/><circle cx="60" cy="34" r="8"/><path d="M44 50 L30 66 L44 64 M76 50 L90 66 L76 64"/><path d="M50 64 L52 72 L68 72 L70 64"/><path d="M54 72 Q60 94 66 72"/><path d="M20 20 L20 28 M16 24 L24 24 M98 40 L98 48 M94 44 L102 44"/>'
  },
  {
    id: 'planeta', name: 'Planeta', category: 'espacio', level: 'Fácil', tint: '#EEEAFF',
    svg: '<circle cx="60" cy="50" r="24"/><ellipse cx="60" cy="54" rx="48" ry="12"/><path d="M44 40 Q52 36 58 42 M64 58 Q70 62 76 56"/><circle cx="16" cy="18" r="3"/><circle cx="104" cy="84" r="3"/><path d="M100 14 L100 24 M95 19 L105 19"/>'
  },
  {
    id: 'luna', name: 'Luna y estrellas', category: 'espacio', level: 'Fácil', tint: '#EEEAFF',
    svg: '<path d="M70 12 A38 38 0 1 0 100 74 A40 40 0 0 1 70 12 Z"/><path d="M44 42 Q48 46 52 42"/><path d="M46 60 Q52 65 57 59"/><polygon points="92,28 94.4,34.8 101.5,34.9 95.8,39.2 97.9,46.1 92,42 86.1,46.1 88.2,39.2 82.5,34.9 89.6,34.8"/><polygon points="18,12 19.9,17.4 25.6,17.5 21,21 22.7,26.5 18,23.2 13.3,26.5 15,21 10.4,17.5 16.1,17.4"/><polygon points="20,77 21.7,81.8 26.7,81.8 22.7,84.8 24.1,89.7 20,86.8 15.9,89.7 17.3,84.8 13.3,81.8 18.3,81.8"/>'
  },
  {
    id: 'sol', name: 'Sol', category: 'espacio', level: 'Fácil', tint: '#EEEAFF',
    svg: '<circle cx="60" cy="50" r="22"/><circle cx="52" cy="46" r="2.5"/><circle cx="68" cy="46" r="2.5"/><path d="M50 54 Q60 64 70 54"/><polygon points="102,50 86.3,43.9 86.3,56.1"/><polygon points="89.7,79.7 82.9,64.3 74.3,72.9"/><polygon points="60,92 66.1,76.3 53.9,76.3"/><polygon points="30.3,79.7 45.7,72.9 37.1,64.3"/><polygon points="18,50 33.7,56.1 33.7,43.9"/><polygon points="30.3,20.3 37.1,35.7 45.7,27.1"/><polygon points="60,8 53.9,23.7 66.1,23.7"/><polygon points="89.7,20.3 74.3,27.1 82.9,35.7"/>'
  },
  {
    id: 'ovni', name: 'Ovni', category: 'espacio', level: 'Medio', tint: '#EEEAFF',
    svg: '<ellipse cx="60" cy="50" rx="48" ry="12"/><path d="M40 39 Q40 16 60 16 Q80 16 80 39"/><path d="M40 39 Q60 46 80 39"/><circle cx="60" cy="30" r="7"/><circle cx="57" cy="29" r="1.5"/><circle cx="63" cy="29" r="1.5"/><circle cx="28" cy="50" r="3.5"/><circle cx="44" cy="54" r="3.5"/><circle cx="60" cy="55" r="3.5"/><circle cx="76" cy="54" r="3.5"/><circle cx="92" cy="50" r="3.5"/><path d="M40 61 L26 94 M80 61 L94 94 M26 94 L94 94"/><path d="M12 16 L12 24 M8 20 L16 20 M104 22 L104 30 M100 26 L108 26"/>'
  },
  {
    id: 'extraterrestre', name: 'Extraterrestre', category: 'espacio', level: 'Medio', tint: '#EEEAFF',
    svg: '<path d="M60 10 Q92 10 90 40 Q88 62 60 66 Q32 62 30 40 Q28 10 60 10 Z"/><ellipse cx="47" cy="38" rx="7" ry="11" transform="rotate(-20 47 38)"/><ellipse cx="73" cy="38" rx="7" ry="11" transform="rotate(20 73 38)"/><path d="M54 55 Q60 59 66 55"/><path d="M48 14 L41 8 M72 14 L79 8"/><circle cx="40" cy="6" r="2.5"/><circle cx="80" cy="6" r="2.5"/><path d="M50 65 Q40 70 40 82 L40 94 L80 94 L80 82 Q80 70 70 65"/><path d="M40 78 L24 70 M80 78 L96 66"/><circle cx="22" cy="69" r="3"/><circle cx="98" cy="65" r="3"/><circle cx="60" cy="80" r="4"/><path d="M40 88 L80 88"/>'
  },
  {
    id: 'satelite', name: 'Satélite', category: 'espacio', level: 'Medio', tint: '#EEEAFF',
    svg: '<rect x="46" y="34" width="28" height="32" rx="3"/><rect x="8" y="40" width="30" height="20"/><rect x="82" y="40" width="30" height="20"/><path d="M38 50 L46 50 M74 50 L82 50"/><path d="M18 40 L18 60 M28 40 L28 60 M8 50 L38 50"/><path d="M92 40 L92 60 M102 40 L102 60 M82 50 L112 50"/><path d="M46 22 Q60 40 74 22 Z"/><path d="M60 31 L60 34 M60 22 L60 13"/><circle cx="60" cy="10" r="3"/><path d="M54 66 L50 76 L70 76 L66 66"/><circle cx="60" cy="50" r="7"/><circle cx="60" cy="50" r="3"/><path d="M20 16 L20 24 M16 20 L24 20 M100 76 L100 84 M96 80 L104 80"/><circle cx="100" cy="18" r="6"/>'
  },
  {
    id: 'astronauta', name: 'Astronauta', category: 'espacio', level: 'Difícil', tint: '#EEEAFF',
    svg: '<circle cx="60" cy="28" r="20"/><path d="M46 24 Q46 16 60 16 Q74 16 74 24 L74 32 Q74 40 60 40 Q46 40 46 32 Z"/><path d="M51 23 Q54 20 59 20"/><path d="M45 43 L42 76 L78 76 L75 43"/><rect x="52" y="54" width="16" height="12" rx="2"/><circle cx="57" cy="60" r="1.5"/><circle cx="63" cy="60" r="1.5"/><path d="M44 50 Q28 52 22 62 Q18 70 26 72 Q32 72 34 64 L43 62"/><path d="M76 50 Q92 52 98 62 Q102 70 94 72 Q88 72 86 64 L77 62"/><path d="M42 76 L42 92 L58 92 L58 80 L62 80 L62 92 L78 92 L78 76"/><path d="M42 86 L58 86 M62 86 L78 86"/><path d="M42 71 L78 71"/><path d="M75 15 L81 8"/><circle cx="82" cy="6" r="2"/><path d="M14 20 L14 28 M10 24 L18 24 M104 30 L104 38 M100 34 L108 34"/><circle cx="16" cy="84" r="7"/><circle cx="104" cy="84" r="5"/>'
  },
  {
    id: 'rover', name: 'Explorador lunar', category: 'espacio', level: 'Difícil', tint: '#EEEAFF',
    svg: '<circle cx="26" cy="80" r="9"/><circle cx="60" cy="80" r="9"/><circle cx="94" cy="80" r="9"/><circle cx="26" cy="80" r="3.5"/><circle cx="60" cy="80" r="3.5"/><circle cx="94" cy="80" r="3.5"/><path d="M14 62 L106 62 L100 70 L20 70 Z"/><rect x="30" y="44" width="52" height="18"/><rect x="34" y="34" width="48" height="6"/><path d="M46 34 L46 40 M58 34 L58 40 M70 34 L70 40 M58 40 L58 44"/><path d="M92 62 L92 24"/><rect x="84" y="14" width="18" height="10" rx="2"/><circle cx="97" cy="19" r="2.5"/><path d="M24 62 L19 31"/><path d="M8 28 Q22 36 26 18 Z"/><rect x="36" y="49" width="10" height="8"/><circle cx="60" cy="53" r="4"/><path d="M70 49 L78 49 M70 53 L78 53 M70 57 L78 57"/><path d="M4 90 L116 90"/><path d="M56 10 L56 18 M52 14 L60 14 M110 42 L110 48 M107 45 L113 45"/>'
  },
  {
    id: 'estacion', name: 'Estación espacial', category: 'espacio', level: 'Difícil', tint: '#EEEAFF',
    svg: '<rect x="50" y="20" width="20" height="60" rx="6"/><path d="M50 40 L70 40 M50 60 L70 60"/><circle cx="60" cy="30" r="3.5"/><circle cx="60" cy="70" r="3.5"/><circle cx="60" cy="50" r="6"/><rect x="22" y="46" width="28" height="8"/><rect x="70" y="46" width="28" height="8"/><path d="M22 46 L29 54 L36 46 L43 54 L50 46"/><path d="M70 46 L77 54 L84 46 L91 54 L98 46"/><rect x="6" y="12" width="16" height="32"/><rect x="6" y="56" width="16" height="32"/><rect x="98" y="12" width="16" height="32"/><rect x="98" y="56" width="16" height="32"/><rect x="10" y="44" width="8" height="12"/><rect x="102" y="44" width="8" height="12"/><path d="M6 20 L22 20 M6 28 L22 28 M6 36 L22 36 M6 64 L22 64 M6 72 L22 72 M6 80 L22 80"/><path d="M98 20 L114 20 M98 28 L114 28 M98 36 L114 36 M98 64 L114 64 M98 72 L114 72 M98 80 L114 80"/><path d="M70 26 L84 26 Q88 26 88 30 Q88 34 84 34 L70 34"/><path d="M50 66 L36 66 Q32 66 32 70 Q32 74 36 74 L50 74"/><path d="M60 20 L60 11"/><circle cx="60" cy="8" r="2.5"/>'
  },

  /* ================= Mar ================= */
  {
    id: 'pez', name: 'Pececito', category: 'mar', level: 'Fácil', tint: '#E3F6FB',
    svg: '<path d="M14 50 Q40 18 76 34 Q86 40 88 50 Q86 60 76 66 Q40 82 14 50 Z"/><path d="M88 50 L108 32 L104 50 L108 68 Z"/><circle cx="32" cy="46" r="4"/><path d="M48 34 Q56 50 48 66 M60 32 Q68 50 60 68"/><path d="M46 30 Q54 16 66 26"/><circle cx="24" cy="24" r="3"/><circle cx="16" cy="14" r="2"/>'
  },
  {
    id: 'ballena', name: 'Ballena', category: 'mar', level: 'Fácil', tint: '#E3F6FB',
    svg: '<path d="M10 56 Q10 30 44 30 Q76 30 90 52 Q96 44 98 34 Q104 40 110 34 Q112 50 100 60 Q84 80 48 80 Q10 80 10 56 Z"/><circle cx="28" cy="52" r="2.5"/><path d="M11 62 Q22 70 36 64"/><path d="M52 62 Q52 74 64 74 Q62 68 60 62 Z"/><path d="M40 30 L40 20 M40 20 Q34 10 26 16 M40 20 Q46 10 54 16"/>'
  },
  {
    id: 'medusa', name: 'Medusa', category: 'mar', level: 'Fácil', tint: '#E3F6FB',
    svg: '<path d="M26 46 Q26 10 60 10 Q94 10 94 46 Q86 52 78 46 Q69 52 60 46 Q51 52 42 46 Q34 52 26 46 Z"/><path d="M34 50 Q28 60 34 70 Q40 80 34 90"/><path d="M47 50 Q41 60 47 70 Q53 80 47 92"/><path d="M60 50 Q54 60 60 70 Q66 80 60 94"/><path d="M73 50 Q67 60 73 70 Q79 80 73 92"/><path d="M86 50 Q80 60 86 70 Q92 80 86 90"/><circle cx="50" cy="30" r="3"/><circle cx="70" cy="30" r="3"/><path d="M54 37 Q60 42 66 37"/><circle cx="106" cy="20" r="4"/><circle cx="110" cy="34" r="2.5"/><circle cx="12" cy="26" r="3"/>'
  },
  {
    id: 'estrella-mar', name: 'Estrella de mar', category: 'mar', level: 'Fácil', tint: '#E3F6FB',
    svg: '<polygon points="60,10 70.6,35.4 98,37.6 77.1,55.6 83.5,82.4 60,68 36.5,82.4 42.9,55.6 22,37.6 49.4,35.4"/><circle cx="54" cy="46" r="2.5"/><circle cx="66" cy="46" r="2.5"/><path d="M54 53 Q60 58 66 53"/><circle cx="60" cy="24" r="2"/><circle cx="84" cy="41" r="2"/><circle cx="76" cy="72" r="2"/><circle cx="44" cy="72" r="2"/><circle cx="36" cy="41" r="2"/><path d="M6 92 Q30 86 60 92 Q90 97 114 92"/><circle cx="16" cy="16" r="4"/><circle cx="104" cy="18" r="3"/>'
  },
  {
    id: 'velero', name: 'Velero', category: 'mar', level: 'Fácil', tint: '#E3F6FB',
    svg: '<path d="M14 66 L106 66 L92 84 L28 84 Z"/><path d="M58 66 L58 8"/><path d="M62 20 L62 58 L96 58 Z"/><path d="M54 24 L54 58 L24 58 Z"/><path d="M58 8 L70 12 L58 16"/><circle cx="44" cy="74" r="3"/><circle cx="60" cy="74" r="3"/><circle cx="76" cy="74" r="3"/><path d="M6 91 Q16 86 26 91 Q36 96 46 91 Q56 86 66 91 Q76 96 86 91 Q96 86 106 91 Q110 93 114 91"/><circle cx="102" cy="20" r="8"/>'
  },
  {
    id: 'cangrejo', name: 'Cangrejo', category: 'mar', level: 'Medio', tint: '#E3F6FB',
    svg: '<ellipse cx="60" cy="60" rx="28" ry="18"/><path d="M50 43 L48 32 M70 43 L72 32"/><circle cx="48" cy="28" r="4.5"/><circle cx="72" cy="28" r="4.5"/><circle cx="48" cy="28" r="1.5"/><circle cx="72" cy="28" r="1.5"/><path d="M52 64 Q60 70 68 64"/><path d="M34 52 Q22 46 20 34"/><path d="M20 34 Q8 34 8 22 Q10 12 20 12 L18 22 L28 16 Q32 28 20 34 Z"/><path d="M86 52 Q98 46 100 34"/><path d="M100 34 Q112 34 112 22 Q110 12 100 12 L102 22 L92 16 Q88 28 100 34 Z"/><path d="M36 68 L20 66 L14 74 M38 73 L24 76 L20 84 M44 77 L34 84 L32 92"/><path d="M84 68 L100 66 L106 74 M82 73 L96 76 L100 84 M76 77 L86 84 L88 92"/>'
  },
  {
    id: 'tortuga', name: 'Tortuga marina', category: 'mar', level: 'Medio', tint: '#E3F6FB',
    svg: '<ellipse cx="60" cy="52" rx="26" ry="22"/><path d="M84 44 Q100 40 104 52 Q100 64 84 60"/><circle cx="96" cy="48" r="1.5"/><circle cx="96" cy="56" r="1.5"/><path d="M70 32 Q80 12 92 14 Q88 26 78 36"/><path d="M70 72 Q80 92 92 90 Q88 78 78 68"/><path d="M44 35 Q32 22 26 26 Q30 34 38 40"/><path d="M44 69 Q32 82 26 78 Q30 70 38 64"/><path d="M34 49 L24 52 L34 55"/><path d="M52 44 L68 44 L74 52 L68 60 L52 60 L46 52 Z"/><path d="M52 44 L48 33 M68 44 L72 33 M74 52 L86 52 M68 60 L72 71 M52 60 L48 71 M46 52 L34 52"/>'
  },
  {
    id: 'tiburon', name: 'Tiburón', category: 'mar', level: 'Medio', tint: '#E3F6FB',
    svg: '<path d="M6 50 Q30 30 60 34 Q84 36 98 46 L114 30 Q110 48 114 68 L98 54 Q84 66 60 66 Q28 68 6 50 Z"/><path d="M52 34 L66 12 Q68 26 74 36"/><path d="M84 39 L90 31 L92 42"/><path d="M46 66 L42 84 Q56 78 60 66"/><path d="M36 46 Q34 52 36 58 M41 45 Q39 52 41 59 M46 44 Q44 52 46 60"/><circle cx="20" cy="46" r="2"/><path d="M11 54 Q20 60 30 56"/><path d="M14 56 L16 59 L18 57 L20 60 L22 58 L24 60 L26 57"/><circle cx="10" cy="30" r="3"/><circle cx="16" cy="20" r="2"/>'
  },
  {
    id: 'pulpo', name: 'Pulpo', category: 'mar', level: 'Difícil', tint: '#E3F6FB',
    svg: '<path d="M34 50 Q30 12 60 12 Q90 12 86 50"/><path d="M34 50 Q18 54 12 68 Q8 82 18 84 Q25 82 20 74 Q22 64 36 62 Q30 74 32 86 Q36 95 44 90 Q47 84 41 80 Q42 70 52 64 Q60 70 68 64 Q78 70 79 80 Q73 84 76 90 Q84 95 88 86 Q90 74 84 62 Q98 64 100 74 Q95 82 102 84 Q112 82 108 68 Q102 54 86 50"/><circle cx="50" cy="36" r="4"/><circle cx="70" cy="36" r="4"/><circle cx="50" cy="36" r="1.5"/><circle cx="70" cy="36" r="1.5"/><path d="M54 46 Q60 50 66 46"/><circle cx="46" cy="22" r="2.5"/><circle cx="60" cy="19" r="2"/><circle cx="74" cy="22" r="2.5"/><circle cx="15" cy="72" r="1.5"/><circle cx="36" cy="80" r="1.5"/><circle cx="84" cy="80" r="1.5"/><circle cx="105" cy="72" r="1.5"/><circle cx="104" cy="22" r="4"/><circle cx="110" cy="36" r="2.5"/><circle cx="14" cy="24" r="3"/>'
  },
  {
    id: 'submarino', name: 'Submarino', category: 'mar', level: 'Difícil', tint: '#E3F6FB',
    svg: '<path d="M14 58 Q14 40 36 40 L84 40 Q106 40 106 58 Q106 76 84 76 L36 76 Q14 76 14 58 Z"/><path d="M48 40 L50 24 L72 24 L74 40"/><path d="M62 24 L62 10 L72 10 L72 14"/><circle cx="38" cy="58" r="7"/><circle cx="60" cy="58" r="7"/><circle cx="82" cy="58" r="7"/><circle cx="38" cy="58" r="4"/><circle cx="60" cy="58" r="4"/><circle cx="82" cy="58" r="4"/><path d="M14 58 L8 58"/><path d="M8 58 Q2 48 8 44 Q12 50 8 58 Q2 68 8 72 Q12 66 8 58"/><path d="M52 76 L48 84 L72 84 L68 76"/><path d="M26 44 L26 72 M94 44 L94 72"/><circle cx="90" cy="26" r="4"/><circle cx="100" cy="16" r="3"/><circle cx="108" cy="28" r="2"/><path d="M14 20 Q22 12 30 20 Q22 28 14 20 Z M30 20 L36 15 L36 25 Z"/><path d="M4 94 Q20 89 36 94 Q52 98 68 93 Q88 88 116 94"/>'
  },

  /* ================= Castillos ================= */
  {
    id: 'corona', name: 'Corona', category: 'castillos', level: 'Fácil', tint: '#FFEDF2',
    svg: '<path d="M18 76 L12 30 L36 52 L60 18 L84 52 L108 30 L102 76 Z"/><rect x="18" y="76" width="84" height="12"/><circle cx="12" cy="24" r="5"/><circle cx="60" cy="12" r="5"/><circle cx="108" cy="24" r="5"/><circle cx="60" cy="56" r="6"/><circle cx="60" cy="82" r="3.5"/><path d="M36 78 L40 82 L36 86 L32 82 Z"/><path d="M84 78 L88 82 L84 86 L80 82 Z"/>'
  },
  {
    id: 'torre', name: 'Torre', category: 'castillos', level: 'Fácil', tint: '#FFEDF2',
    svg: '<path d="M40 92 L40 40 M80 40 L80 92"/><path d="M34 40 L34 24 L44 24 L44 30 L54 30 L54 24 L66 24 L66 30 L76 30 L76 24 L86 24 L86 40 Z"/><path d="M54 62 L54 52 Q60 44 66 52 L66 62 Z"/><path d="M52 92 L52 78 Q60 68 68 78 L68 92"/><path d="M60 24 L60 6 L76 11 L60 16"/><path d="M40 50 L48 50 M72 46 L80 46 M40 72 L46 72 M74 66 L80 66"/><path d="M20 92 L100 92"/>'
  },
  {
    id: 'escudo', name: 'Escudo', category: 'castillos', level: 'Fácil', tint: '#FFEDF2',
    svg: '<path d="M60 8 L98 18 L98 48 Q98 78 60 94 Q22 78 22 48 L22 18 Z"/><path d="M60 8 L60 94 M22 44 L98 44"/><circle cx="41" cy="29" r="7"/><polygon points="79,21 80.9,26.4 86.6,26.5 82,30 83.7,35.5 79,32.2 74.3,35.5 76,30 71.4,26.5 77.1,26.4"/><polygon points="43,52 44.9,57.4 50.6,57.5 46,61 47.7,66.5 43,63.2 38.3,66.5 40,61 35.4,57.5 41.1,57.4"/><circle cx="76" cy="60" r="7"/>'
  },
  {
    id: 'castillo', name: 'Castillo', category: 'castillos', level: 'Medio', tint: '#FFEDF2',
    svg: '<path d="M14 92 L14 28 L20 28 L20 34 L26 34 L26 28 L32 28 L32 92"/><path d="M88 92 L88 28 L94 28 L94 34 L100 34 L100 28 L106 28 L106 92"/><path d="M32 92 L32 50 L38 50 L38 44 L46 44 L46 50 L54 50 L54 44 L66 44 L66 50 L74 50 L74 44 L82 44 L82 50 L88 50"/><path d="M14 92 L106 92"/><path d="M50 92 L50 72 Q60 60 70 72 L70 92"/><path d="M23 28 L23 10 L36 16 L23 20"/><path d="M97 28 L97 10 L110 16 L97 20"/>'
  },
  {
    id: 'cofre', name: 'Cofre del tesoro', category: 'castillos', level: 'Medio', tint: '#FFEDF2',
    svg: '<rect x="20" y="50" width="80" height="38"/><path d="M20 50 L20 38 Q20 22 36 22 L84 22 Q100 22 100 38 L100 50"/><path d="M34 22 L34 88 M42 22 L42 88 M78 22 L78 88 M86 22 L86 88"/><rect x="53" y="44" width="14" height="14" rx="2"/><circle cx="60" cy="49" r="2"/><path d="M60 51 L60 55"/><path d="M60 26 L66 33 L60 40 L54 33 Z"/><circle cx="60" cy="72" r="5"/><circle cx="10" cy="84" r="5"/><circle cx="110" cy="84" r="5"/>'
  },
  {
    id: 'casco', name: 'Casco de caballero', category: 'castillos', level: 'Medio', tint: '#FFEDF2',
    svg: '<path d="M30 84 L30 44 Q30 14 60 14 Q90 14 90 44 L90 84 Q60 94 30 84 Z"/><path d="M38 44 L82 44 L82 52 L38 52 Z"/><path d="M56 52 L56 74 L64 74 L64 52"/><circle cx="42" cy="62" r="1.8"/><circle cx="48" cy="62" r="1.8"/><circle cx="42" cy="70" r="1.8"/><circle cx="48" cy="70" r="1.8"/><circle cx="72" cy="62" r="1.8"/><circle cx="78" cy="62" r="1.8"/><circle cx="72" cy="70" r="1.8"/><circle cx="78" cy="70" r="1.8"/><path d="M60 14 Q60 2 76 4 Q96 8 100 30 Q90 22 84 24 Q86 16 76 14 Q70 12 66 15"/><path d="M30 78 Q60 88 90 78"/><circle cx="36" cy="38" r="1.5"/><circle cx="84" cy="38" r="1.5"/>'
  },
  {
    id: 'trono', name: 'Trono', category: 'castillos', level: 'Medio', tint: '#FFEDF2',
    svg: '<path d="M36 60 L36 22 Q36 10 48 10 L72 10 Q84 10 84 22 L84 60"/><path d="M44 60 L44 24 Q44 18 50 18 L70 18 Q76 18 76 24 L76 60"/><path d="M28 60 L92 60 L92 72 L28 72 Z"/><path d="M28 60 L28 46 Q28 42 32 42 L36 42"/><path d="M92 60 L92 46 Q92 42 88 42 L84 42"/><path d="M32 72 L32 92 L42 92 L42 72 M78 72 L78 92 L88 92 L88 72"/><path d="M42 80 L78 80"/><circle cx="60" cy="14" r="2.5"/><path d="M44 60 Q60 52 76 60"/><path d="M60 26 L66 35 L60 44 L54 35 Z"/><path d="M16 92 L104 92"/>'
  },
  {
    id: 'dragon', name: 'Dragón', category: 'castillos', level: 'Difícil', tint: '#FFEDF2',
    svg: '<path d="M10 36 Q10 28 20 26 L34 22 Q44 20 48 28 Q50 34 46 40 Q52 48 54 58 Q70 50 86 58 Q100 66 106 84 Q110 90 116 88 Q112 96 102 94 Q92 92 88 80 Q86 88 78 90 L78 94 L64 94 L66 88 Q58 88 52 84 L52 94 L38 94 L40 84 Q32 72 34 56 Q34 48 32 42 L16 42 Q10 42 10 36 Z"/><circle cx="36" cy="29" r="2"/><circle cx="15" cy="32" r="1"/><path d="M12 38 L28 38"/><path d="M39 21 L42 10 L45 23"/><path d="M46 25 L54 16 L49 30"/><path d="M60 55 L70 12 Q92 16 102 36 Q94 34 90 44 Q84 40 80 50 Q74 46 70 53"/><path d="M70 12 L90 44 M70 12 L80 50"/><path d="M92 62 L98 57 L98 68 M100 72 L107 69 L105 80"/><path d="M35 60 L44 60 M35 68 L46 68 M38 76 L48 76"/>'
  },
  {
    id: 'carruaje', name: 'Carruaje', category: 'castillos', level: 'Difícil', tint: '#FFEDF2',
    svg: '<path d="M28 58 Q24 26 60 26 Q96 26 92 58 Q76 64 60 64 Q44 64 28 58 Z"/><path d="M50 34 L70 34 Q72 34 72 38 L72 52 L48 52 L48 38 Q48 34 50 34 Z"/><path d="M48 42 Q60 48 72 42"/><path d="M42 30 L42 62 M78 30 L78 62"/><path d="M54 26 L52 16 L57 20 L60 12 L63 20 L68 16 L66 26"/><circle cx="34" cy="80" r="14"/><circle cx="34" cy="80" r="3"/><path d="M34 66 L34 94 M20 80 L48 80 M24 70 L44 90 M44 70 L24 90"/><circle cx="88" cy="82" r="12"/><circle cx="88" cy="82" r="3"/><path d="M88 70 L88 94 M76 82 L100 82 M79.5 73.5 L96.5 90.5 M96.5 73.5 L79.5 90.5"/><path d="M48 80 L76 82"/><path d="M92 54 Q106 54 114 62"/>'
  },
  {
    id: 'palacio', name: 'Palacio', category: 'castillos', level: 'Difícil', tint: '#FFEDF2',
    svg: '<path d="M44 92 L44 40 M76 40 L76 92"/><path d="M40 40 L60 12 L80 40 Z"/><path d="M60 12 L60 4 L70 7 L60 10"/><path d="M18 92 L18 54 M38 54 L38 92"/><path d="M14 54 L28 30 L42 54 Z"/><path d="M82 92 L82 54 M102 54 L102 92"/><path d="M78 54 L92 30 L106 54 Z"/><path d="M28 30 L28 22 L36 25 L28 28"/><path d="M92 30 L92 22 L100 25 L92 28"/><path d="M38 68 L44 68 M76 68 L82 68"/><path d="M6 92 L6 66 L4 66 L4 60 L8 60 L8 63 L12 63 L12 60 L16 60 L16 66 L18 66"/><path d="M114 92 L114 66 L116 66 L116 60 L112 60 L112 63 L108 63 L108 60 L104 60 L104 66 L102 66"/><path d="M52 92 L52 74 Q60 64 68 74 L68 92"/><path d="M56 71 L56 92 M60 69 L60 92 M64 71 L64 92"/><path d="M56 58 L56 50 Q60 46 64 50 L64 58 Z"/><path d="M25 72 L25 64 Q28 60 31 64 L31 72 Z"/><path d="M89 72 L89 64 Q92 60 95 64 L95 72 Z"/><path d="M2 92 L118 92"/>'
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
