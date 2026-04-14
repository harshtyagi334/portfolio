/* ═══════════════════════════════════════
   boot.js — Boot Screen Animation
   ═══════════════════════════════════════ */

'use strict';

const BOOT_MESSAGES = [
  'Initializing PixelOS kernel...',
  'Loading system drivers...',
  'Detecting hardware profile...',
  'Loading Harsh.exe...',
  'Mounting portfolio filesystem...',
  'Starting desktop environment...',
  'Welcome, Harsh Tyagi ✔',
];

const BOOT_SPEED_MS = 420; // ms between each step

function runBootSequence() {
  const screen  = document.getElementById('boot-screen');
  const bar     = document.getElementById('boot-progress-bar');
  const text    = document.getElementById('boot-text');

  if (!screen || !bar || !text) return;

  let step = 0;

  const tick = () => {
    if (step >= BOOT_MESSAGES.length) {
      clearInterval(interval);
      /* Fade out boot screen */
      setTimeout(() => {
        screen.style.opacity    = '0';
        screen.style.transition = 'opacity 0.5s ease';
        setTimeout(() => { screen.style.display = 'none'; }, 520);
      }, 400);
      return;
    }

    const pct = Math.round(((step + 1) / BOOT_MESSAGES.length) * 100);
    bar.style.width   = pct + '%';
    text.textContent  = BOOT_MESSAGES[step];
    step++;
  };

  tick(); // fire immediately (no initial delay)
  const interval = setInterval(tick, BOOT_SPEED_MS);
}

/* ── EXPORT ── */
window.runBootSequence = runBootSequence;
