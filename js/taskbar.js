/* ═══════════════════════════════════════
   taskbar.js — Taskbar Buttons, Clock, Start Menu
   ═══════════════════════════════════════ */

'use strict';

/* ── TASKBAR BUTTONS ── */
function updateTaskbar() {
  const container = document.getElementById('taskbar-buttons');
  if (!container) return;
  container.innerHTML = '';

  Object.keys(WINDOWS).forEach(id => {
    const w  = WINDOWS[id];
    const el = w.el;
    if (!el || !el.classList.contains('visible')) return;

    const btn = document.createElement('button');
    btn.className = 'taskbar-btn' + (el.classList.contains('focused') ? ' active' : '');
    btn.textContent = w.title;

    btn.addEventListener('click', () => {
      if (el.classList.contains('minimized')) {
        /* Restore */
        el.classList.remove('minimized');
        focusWindow(el);
      } else if (el.classList.contains('focused')) {
        /* Minimise (click active window) */
        el.classList.add('minimized');
        el.classList.remove('focused');
      } else {
        /* Bring to front */
        focusWindow(el);
      }
      updateTaskbar();
    });

    container.appendChild(btn);
  });
}

/* ── CLOCK ── */
function updateClock() {
  const el = document.getElementById('clock');
  if (!el) return;
  const now = new Date();
  const h   = String(now.getHours()).padStart(2, '0');
  const m   = String(now.getMinutes()).padStart(2, '0');
  el.textContent = `${h}:${m}`;
}

function initClock() {
  updateClock();
  setInterval(updateClock, 10_000);
}

/* ── START MENU ── */
function toggleStartMenu() {
  const sm = document.getElementById('start-menu');
  if (sm) sm.classList.toggle('open');
}

function initStartMenu() {
  /* Close start menu when clicking anywhere outside it */
  document.addEventListener('click', e => {
    const sm = document.getElementById('start-menu');
    if (!sm) return;
    if (!e.target.closest('#start-menu') && !e.target.closest('#start-btn')) {
      sm.classList.remove('open');
    }
  });
}

/* ── WELCOME DIALOG ── */
function closeDialog() {
  const dlg = document.getElementById('welcome-dialog');
  if (dlg) dlg.classList.remove('open');
}

/* ── CONTACT FORM ── */
function sendMsg() {
  const name    = document.getElementById('c-name')?.value.trim();
  const email   = document.getElementById('c-email')?.value.trim();
  const subject = document.getElementById('c-subject')?.value.trim();
  const msg     = document.getElementById('c-msg')?.value.trim();

  if (!name || !email || !msg) {
    alert('⚠️ Please fill in Name, Email, and Message fields.');
    return;
  }

  // Show sending indicator
  const btn = document.querySelector('.submit-btn');
  const originalText = btn.textContent;
  btn.textContent = '📨 Sending...';
  btn.disabled = true;

  // Using FormSubmit.co - free service that emails you the form data
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('subject', subject || 'Portfolio Enquiry');
  formData.append('message', msg);
  formData.append('_replyto', email);
  formData.append('_subject', `Portfolio Contact: ${subject || 'New Message'} from ${name}`);
  formData.append('_captcha', 'false');

  fetch('https://formsubmit.co/ajax/tyagiharsh2627@gmail.com', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert('✅ Message sent successfully! I will get back to you soon.');
      // Clear the form
      document.getElementById('c-name').value = '';
      document.getElementById('c-email').value = '';
      document.getElementById('c-subject').value = '';
      document.getElementById('c-msg').value = '';
    } else {
      alert('❌ Failed to send message. Please try again or email me directly at tyagiharsh2627@gmail.com');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('❌ Network error. Please check your connection and try again, or email me directly at tyagiharsh2627@gmail.com');
  })
  .finally(() => {
    btn.textContent = originalText;
    btn.disabled = false;
  });
}

/* ── DESKTOP ICON SELECTION ── */
function initDesktopIcons() {
  const icons   = document.querySelectorAll('.icon');
  const desktop = document.getElementById('desktop');

  icons.forEach(icon => {
    icon.addEventListener('click', () => {
      icons.forEach(i => i.classList.remove('active'));
      icon.classList.add('active');
    });
  });

  if (desktop) {
    desktop.addEventListener('click', e => {
      if (e.target === desktop) {
        icons.forEach(i => i.classList.remove('active'));
      }
    });
  }
}

/* ── EXPORTS ── */
window.updateTaskbar  = updateTaskbar;
window.toggleStartMenu = toggleStartMenu;
window.closeDialog    = closeDialog;
window.sendMsg        = sendMsg;
window.initClock      = initClock;
window.initStartMenu  = initStartMenu;
window.initDesktopIcons = initDesktopIcons;