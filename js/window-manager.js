/* ═══════════════════════════════════════
   window-manager.js — Open, Close, Minimize, Maximize, Drag, Focus
   ═══════════════════════════════════════ */

'use strict';

/* ── REGISTRY ── */
const WINDOWS = {
  about:          { title: '🖥️ My Portfolio',    el: null },
  projects:       { title: '📁 Projects',         el: null },
  skills:         { title: '⚙️ Skills.exe',       el: null },
  experience:     { title: '💼 Experience',        el: null },
  certifications: { title: '🏆 Certificates',     el: null },
  hackerrank:     { title: '💻 HackerRank',        el: null },
  contact:        { title: '📧 Contact.exe',       el: null },
  recycle:        { title: '🗑️ Recycle Bin',       el: null },
};

let zTop = 100;

/* ── INIT — bind elements ── */
function initWindows() {
  Object.keys(WINDOWS).forEach(id => {
    WINDOWS[id].el = document.getElementById('win-' + id);
  });

  /* Focus window on any mousedown inside it */
  document.querySelectorAll('.window').forEach(el => {
    el.addEventListener('mousedown', () => {
      focusWindow(el);
      updateTaskbar();
    });
  });
}

/* ── OPEN ── */
function openWindow(id) {
  const w = WINDOWS[id];
  if (!w || !w.el) return;

  w.el.classList.add('visible');
  w.el.classList.remove('minimized');
  focusWindow(w.el);
  updateTaskbar();

  /* Animate progress bars inside this window (if any) */
  animateProgressBars(w.el);

  /* Close start menu if open */
  const sm = document.getElementById('start-menu');
  if (sm) sm.classList.remove('open');
}

/* ── CLOSE ── */
function closeWindow(elOrId) {
  const el = _resolve(elOrId);
  if (!el) return;
  el.classList.remove('visible', 'focused', 'minimized');
  updateTaskbar();
}

/* ── MINIMIZE ── */
function minimizeWindow(elOrId) {
  const el = _resolve(elOrId);
  if (!el) return;
  el.classList.add('minimized');
  el.classList.remove('focused');
  updateTaskbar();
}

/* ── MAXIMIZE / RESTORE ── */
function maximizeWindow(elOrId) {
  const el = _resolve(elOrId);
  if (!el) return;

  if (el.dataset.maximized === 'true') {
    /* Restore */
    el.style.top    = el.dataset.prevTop;
    el.style.left   = el.dataset.prevLeft;
    el.style.width  = el.dataset.prevW;
    el.style.height = el.dataset.prevH;
    el.dataset.maximized = 'false';
  } else {
    /* Maximise */
    el.dataset.prevTop  = el.style.top;
    el.dataset.prevLeft = el.style.left;
    el.dataset.prevW    = el.style.width;
    el.dataset.prevH    = el.style.height;
    el.style.top    = '0';
    el.style.left   = '0';
    el.style.width  = '100vw';
    el.style.height = `calc(100vh - var(--taskbar-h))`;
    el.dataset.maximized = 'true';
  }
  focusWindow(el);
}

/* ── FOCUS ── */
function focusWindow(el) {
  document.querySelectorAll('.window').forEach(w => w.classList.remove('focused'));
  el.classList.add('focused');
  el.style.zIndex = ++zTop;
}

/* ── PROGRESS BAR ANIMATION ── */
function animateProgressBars(container) {
  const bars = container.querySelectorAll('.progress-bar-fill[data-width]');
  bars.forEach(bar => {
    /* Use requestAnimationFrame so the CSS transition fires */
    requestAnimationFrame(() => {
      bar.style.width = bar.dataset.width + '%';
    });
  });
}

/* ── DRAG ── */
let _dragging   = null;
let _dragOffX   = 0;
let _dragOffY   = 0;

function startDrag(e, id) {
  const el = document.getElementById(id);
  if (!el) return;

  /* Don't drag when maximised */
  if (el.dataset.maximized === 'true') return;

  focusWindow(el);
  updateTaskbar();

  _dragging = el;
  _dragOffX = e.clientX - el.offsetLeft;
  _dragOffY = e.clientY - el.offsetTop;
  e.preventDefault();
}

document.addEventListener('mousemove', e => {
  if (!_dragging) return;
  const maxX = window.innerWidth  - _dragging.offsetWidth;
  const maxY = window.innerHeight - 40 - _dragging.offsetHeight;
  const x    = Math.max(0, Math.min(e.clientX - _dragOffX, maxX));
  const y    = Math.max(0, Math.min(e.clientY - _dragOffY, maxY));
  _dragging.style.left = x + 'px';
  _dragging.style.top  = y + 'px';
});

document.addEventListener('mouseup', () => { _dragging = null; });

/* ── HELPERS ── */

/**
 * Resolve an element from either a DOM element or an id string like "win-about" or "about".
 */
function _resolve(elOrId) {
  if (elOrId instanceof HTMLElement) return elOrId;
  /* Accept "win-about" or "about" */
  const id = String(elOrId).replace(/^win-/, '');
  return WINDOWS[id]?.el || document.getElementById(elOrId) || null;
}

/** Open an external link in a new tab */
function openLink(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

/* ── EXPORT to global scope (used by inline HTML handlers) ── */
window.openWindow       = openWindow;
window.closeWindow      = closeWindow;
window.minimizeWindow   = minimizeWindow;
window.maximizeWindow   = maximizeWindow;
window.startDrag        = startDrag;
window.openLink         = openLink;
window.initWindows      = initWindows;
window.focusWindow      = focusWindow;
window.WINDOWS          = WINDOWS;
