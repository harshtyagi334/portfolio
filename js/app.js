/* ═══════════════════════════════════════
   app.js — Main Entry Point
   Initialises all modules after DOM is ready
   ═══════════════════════════════════════ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* 1. Bind window elements */
  initWindows();

  /* 2. Start clock */
  initClock();

  /* 3. Start menu close-on-outside-click */
  initStartMenu();

  /* 4. Desktop icon click-to-select */
  initDesktopIcons();

  /* 5. Run boot animation */
  runBootSequence();

});
