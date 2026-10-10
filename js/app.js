(function () {
  'use strict';

  var PALETTE = [
    { name: 'Rojo', hex: '#FF4D5E' }, { name: 'Naranja', hex: '#FF7A2F' },
    { name: 'Amarillo', hex: '#FFC93C' }, { name: 'Durazno', hex: '#FFB36B' },
    { name: 'Verde', hex: '#3CC48A' }, { name: 'Verde oscuro', hex: '#1E8A5A' },
    { name: 'Azul cielo', hex: '#6CC6FF' }, { name: 'Azul', hex: '#3B8BFF' },
    { name: 'Morado', hex: '#8E6BFF' }, { name: 'Rosado', hex: '#FF8FB1' },
    { name: 'Café', hex: '#9A6440' }, { name: 'Gris', hex: '#9AA0B4' }
  ];
  // Tamaños en píxeles del lienzo interno (1200 x 1000).
  var SIZES = [
    { name: 'Pincel fino', px: 14, dot: 8 },
    { name: 'Pincel mediano', px: 30, dot: 16 },
    { name: 'Pincel grueso', px: 56, dot: 26 }
  ];
  var MAX_UNDO = 30;
  var OUTLINE_WIDTH = 1.6;   // grosor de la silueta en pantalla (unidades del viewBox 120x100)
  var PRINT_WIDTH = 1.4;     // grosor de la silueta al imprimir

  var $ = function (id) { return document.getElementById(id); };

  var state = {
    category: 'todos',
    drawing: null,
    color: 1,
    size: 1,
    tool: 'brush',
    undo: []
  };

  /* ================= Inicio: categorías y tarjetas ================= */

  function renderChips() {
    var box = $('category-chips');
    box.innerHTML = '';
    window.CATEGORIES.forEach(function (c) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip';
      b.textContent = c.label;
      b.setAttribute('aria-pressed', String(c.id === state.category));
      b.addEventListener('click', function () {
        state.category = c.id;
        renderChips();
        renderGrid();
      });
      box.appendChild(b);
    });
  }

  function categoryLabel(id) {
    var c = window.CATEGORIES.find(function (x) { return x.id === id; });
    return c ? c.label : '';
  }

  function renderGrid() {
    var grid = $('drawing-grid');
    grid.innerHTML = '';
    window.DRAWINGS
      .filter(function (d) { return state.category === 'todos' || d.category === state.category; })
      .forEach(function (d) {
        var a = document.createElement('a');
        a.className = 'card';
        a.href = '#/pintar/' + d.id;
        a.setAttribute('aria-label', 'Pintar ' + d.name);
        a.innerHTML =
          '<div class="card-art" style="background:' + d.tint + '">' +
            window.drawingSvg(d, { strokeWidth: 3 }) +
          '</div>' +
          '<div class="card-foot">' +
            '<div><div class="card-name"></div><div class="card-meta"></div></div>' +
            '<span class="card-cta">Pintar</span>' +
          '</div>';
        a.querySelector('.card-name').textContent = d.name;
        a.querySelector('.card-meta').textContent = categoryLabel(d.category) + ' · ' + d.level;
        a.querySelector('svg').setAttribute('aria-hidden', 'true');
        grid.appendChild(a);
      });
  }

  /* ================= Pintar ================= */

  var canvas = $('paint-canvas');
  var ctx = canvas.getContext('2d');
  var drawingNow = false;
  var last = null;
  var lastMid = null;

  function renderPalette() {
    var box = $('palette');
    box.innerHTML = '';
    PALETTE.forEach(function (p, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'swatch';
      b.style.background = p.hex;
      b.setAttribute('aria-label', p.name);
      b.setAttribute('aria-pressed', String(i === state.color && state.tool === 'brush'));
      b.addEventListener('click', function () {
        state.color = i;
        setTool('brush');
      });
      box.appendChild(b);
    });
    var cur = PALETTE[state.color];
    $('current-swatch').style.background = state.tool === 'eraser' ? '#FFFFFF' : cur.hex;
    $('current-name').textContent = state.tool === 'eraser' ? 'Borrador' : cur.name;
  }

  function renderSizes() {
    var box = $('sizes');
    box.innerHTML = '';
    SIZES.forEach(function (s, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'size';
      b.setAttribute('aria-label', s.name);
      b.setAttribute('aria-pressed', String(i === state.size));
      var dot = document.createElement('span');
      dot.style.width = dot.style.height = s.dot + 'px';
      b.appendChild(dot);
      b.addEventListener('click', function () {
        state.size = i;
        renderSizes();
      });
      box.appendChild(b);
    });
  }

  function setTool(tool) {
    state.tool = tool;
    $('tool-brush').setAttribute('aria-pressed', String(tool === 'brush'));
    $('tool-eraser').setAttribute('aria-pressed', String(tool === 'eraser'));
    renderPalette();
  }

  function updateUndoButton() {
    $('btn-undo').disabled = state.undo.length === 0;
  }

  function pushUndo() {
    state.undo.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    if (state.undo.length > MAX_UNDO) state.undo.shift();
    updateUndoButton();
  }

  function undo() {
    var snap = state.undo.pop();
    if (snap) ctx.putImageData(snap, 0, 0);
    updateUndoButton();
  }

  function toCanvasPoint(e) {
    var r = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - r.left) * (canvas.width / r.width),
      y: (e.clientY - r.top) * (canvas.height / r.height)
    };
  }

  function applyBrush() {
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = SIZES[state.size].px;
    if (state.tool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.strokeStyle = 'rgba(0,0,0,1)';
      ctx.fillStyle = 'rgba(0,0,0,1)';
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = PALETTE[state.color].hex;
      ctx.fillStyle = PALETTE[state.color].hex;
    }
  }

  function onDown(e) {
    if (e.button !== undefined && e.button !== 0) return;
    e.preventDefault();
    canvas.setPointerCapture(e.pointerId);
    pushUndo();
    applyBrush();
    drawingNow = true;
    last = toCanvasPoint(e);
    lastMid = last;
    // Un toque sin mover deja un punto.
    ctx.beginPath();
    ctx.arc(last.x, last.y, ctx.lineWidth / 2, 0, Math.PI * 2);
    ctx.fill();
  }

  function onMove(e) {
    if (!drawingNow) return;
    e.preventDefault();
    var events = e.getCoalescedEvents ? e.getCoalescedEvents() : [e];
    if (!events.length) events = [e];
    events.forEach(function (ev) {
      var p = toCanvasPoint(ev);
      var mid = { x: (last.x + p.x) / 2, y: (last.y + p.y) / 2 };
      ctx.beginPath();
      ctx.moveTo(lastMid.x, lastMid.y);
      ctx.quadraticCurveTo(last.x, last.y, mid.x, mid.y);
      ctx.stroke();
      last = p;
      lastMid = mid;
    });
  }

  function onUp(e) {
    if (!drawingNow) return;
    drawingNow = false;
    ctx.beginPath();
    ctx.moveTo(lastMid.x, lastMid.y);
    ctx.lineTo(last.x, last.y);
    ctx.stroke();
    ctx.globalCompositeOperation = 'source-over';
    if (e && e.pointerId !== undefined && canvas.hasPointerCapture(e.pointerId)) {
      canvas.releasePointerCapture(e.pointerId);
    }
  }

  canvas.addEventListener('pointerdown', onDown);
  canvas.addEventListener('pointermove', onMove);
  canvas.addEventListener('pointerup', onUp);
  canvas.addEventListener('pointercancel', onUp);

  function outlineDataUrl(drawing, strokeWidth) {
    var svg = window.drawingSvg(drawing, { strokeWidth: strokeWidth, size: [canvas.width, canvas.height] });
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  function openDrawing(drawing) {
    state.drawing = drawing;
    state.undo = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateUndoButton();
    $('paint-title').textContent = drawing.name;
    document.title = drawing.name + ' · Pinta Conmigo';
    var img = $('outline-img');
    img.src = outlineDataUrl(drawing, OUTLINE_WIDTH);
    img.alt = 'Silueta: ' + drawing.name;
  }

  function loadImage(src) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.onload = function () { resolve(img); };
      img.onerror = reject;
      img.src = src;
    });
  }

  function save() {
    var d = state.drawing;
    if (!d) return;
    loadImage(outlineDataUrl(d, OUTLINE_WIDTH)).then(function (outline) {
      var out = document.createElement('canvas');
      out.width = canvas.width;
      out.height = canvas.height;
      var o = out.getContext('2d');
      o.fillStyle = '#FFFFFF';
      o.fillRect(0, 0, out.width, out.height);
      o.drawImage(canvas, 0, 0);
      o.drawImage(outline, 0, 0, out.width, out.height);
      out.toBlob(function (blob) {
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'pinta-conmigo-' + d.id + '.png';
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
      }, 'image/png');
    });
  }

  function printOutline() {
    var d = state.drawing;
    if (!d) return;
    $('print-title').textContent = d.name;
    $('print-drawing').innerHTML = window.drawingSvg(d, { stroke: '#000000', strokeWidth: PRINT_WIDTH });
    window.print();
  }

  $('btn-undo').addEventListener('click', undo);
  $('btn-save').addEventListener('click', save);
  $('btn-print').addEventListener('click', printOutline);
  $('tool-brush').addEventListener('click', function () { setTool('brush'); });
  $('tool-eraser').addEventListener('click', function () { setTool('eraser'); });

  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z' && !$('view-paint').hidden) {
      e.preventDefault();
      undo();
    }
  });

  /* ================= Rutas ================= */

  function route() {
    var m = location.hash.match(/^#\/pintar\/([\w-]+)/);
    var drawing = m && window.DRAWINGS.find(function (d) { return d.id === m[1]; });
    if (drawing) {
      $('view-home').hidden = true;
      $('view-paint').hidden = false;
      openDrawing(drawing);
    } else {
      $('view-paint').hidden = true;
      $('view-home').hidden = false;
      document.title = 'Pinta Conmigo';
      state.drawing = null;
    }
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', route);

  renderChips();
  renderGrid();
  renderPalette();
  renderSizes();
  route();
})();
