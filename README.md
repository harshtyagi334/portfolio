# 🖥️ Harsh Tyagi — PixelOS Portfolio

A Windows 98-inspired interactive portfolio website.

---

## 📁 Directory Structure

```
harsh-portfolio/
│
├── index.html                  ← Main HTML (entry point)
│
├── css/
│   ├── base.css                ← CSS variables, reset, desktop, icons, tooltips
│   ├── windows.css             ← Window chrome, taskbar, start menu, dialogs
│   ├── components.css          ← Content styles, badges, cards, forms, tables
│   └── animations.css          ← Boot screen, transitions, keyframes
│
├── js/
│   ├── content.js              ← All window HTML content (edit your info here)
│   ├── window-manager.js       ← Open/close/minimize/maximize/drag/focus logic
│   ├── taskbar.js              ← Taskbar buttons, clock, start menu, forms
│   ├── boot.js                 ← Boot screen animation sequence
│   └── app.js                  ← Main entry — initialises all modules
│
├── assets/
│   └── icons/
│       └── favicon.ico         ← Add your favicon here (optional)
│
└── README.md                   ← This file
```

---

## ✏️ How to Customise

### Update Your Info
- Open **`js/content.js`** — all window content is here as plain HTML strings.
- Each key maps to a window: `about`, `projects`, `skills`, `experience`, `certifications`, `hackerrank`, `contact`.

### Update HackerRank Username
In `js/content.js`, search for `harshtyagi334` in the `hackerrank` section and replace with your actual username. Also update the URL in `index.html` under the desktop icon and start menu.

### Add a New Window
1. Add a new entry to `WINDOWS` in `js/window-manager.js`
2. Add window HTML in `index.html` (copy an existing window block)
3. Add content in `js/content.js`
4. Add a desktop icon + start menu item in `index.html`

### Change Colors
All colors are CSS variables in `css/base.css` under `:root { }`.

---

## 🚀 How to Host (Free, No Branding)

### Option A — Netlify Drop (30 seconds)
1. Go to **netlify.com/drop**
2. Drag the entire `harsh-portfolio/` folder
3. Get a live URL

### Option B — GitHub Pages (Recommended for developers)
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/harshtyagi334/harsh-portfolio.git
git push -u origin main
```
Then: Settings → Pages → Deploy from `main` branch → `/` (root)
Live at: `harshtyagi334.github.io/harsh-portfolio`

### Option C — Custom Domain (No platform branding in URL)
1. Buy `harshtyagi.dev` on Porkbun (~₹300/yr)
2. Host on Netlify or GitHub Pages (free)
3. Connect domain via DNS settings

---

## 🛠️ Local Development

No build tools needed! Just open `index.html` in a browser, or use VS Code Live Server:
```
Right-click index.html → Open with Live Server
```

---

## 📦 Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure |
| CSS3 (4 files) | Styling, animations |
| Vanilla JavaScript (5 files) | Interactivity |
| Google Fonts | VT323 + Share Tech Mono (retro fonts) |

Zero dependencies. Zero frameworks. Zero build steps.
