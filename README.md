# 🖥️ Harsh Tyagi — PixelOS Portfolio

> A fully interactive Windows 98-inspired developer portfolio built with pure HTML, CSS, and JavaScript.

Experience a nostalgic desktop operating system directly in the browser — complete with draggable windows, a retro taskbar, desktop shortcuts, boot animations, and an immersive pixel-style UI inspired by classic Windows systems.

---

# 🌐 Live Demo

🔗 Portfolio Website:  
https://harshtyagi334.github.io/portfolio/

🔗 GitHub Repository:  
https://github.com/harshtyagi334/portfolio

🔗 LinkedIn:  
https://www.linkedin.com/in/harsh-tyagi-118577312

---

# 📸 Preview

<img width="1200" alt="Portfolio Preview" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

---

# ✨ Features

## 🪟 Retro Desktop Experience
- Windows 98-inspired user interface
- Draggable application windows
- Interactive desktop shortcuts
- Functional taskbar
- Start menu system
- Window focus management
- Minimize / maximize / close actions

## ⚡ Interactive UI & Animations
- Smooth boot screen animation
- Retro-style transitions
- Hover effects and desktop interactions
- Live digital clock
- Responsive user interactions

## 👨‍💻 Portfolio Sections
- About Me
- Projects
- Skills
- Certifications
- Experience
- HackerRank
- Contact Information

## 🎨 PixelOS Design System
- Pixel-perfect retro aesthetics
- Monospace typography
- Custom CSS variables
- Lightweight architecture
- Minimal and fast-loading UI

## 📱 Responsive Design
- Desktop optimized experience
- Mobile-friendly layout support
- Adaptive window scaling

---

# 🧱 Project Architecture

```bash
portfolio/
│
├── index.html                  # Main entry point
│
├── css/
│   ├── base.css                # CSS variables, desktop styles, resets
│   ├── windows.css             # Window system styling
│   ├── components.css          # Cards, forms, tables, badges
│   └── animations.css          # Boot animations & transitions
│
├── js/
│   ├── content.js              # Portfolio content
│   ├── window-manager.js       # Window interactions & controls
│   ├── taskbar.js              # Taskbar & start menu logic
│   ├── boot.js                 # Boot sequence animation
│   └── app.js                  # Main application bootstrap
│
├── assets/
│   ├── icons/
│   ├── wallpapers/
│   └── favicon.ico
│
└── README.md
```

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure |
| CSS3 | Styling & Animations |
| Vanilla JavaScript | Interactivity |
| Google Fonts | Retro Typography |
| GitHub Pages | Deployment |

---

# 🎨 UI Inspiration

This project is inspired by:
- Windows 95 / Windows 98
- Retro desktop operating systems
- Pixel-art interfaces
- Cyberpunk UI aesthetics
- Classic developer environments

---

# 🚀 Getting Started

## 📋 Prerequisites

You only need:
- A modern browser
- VS Code (recommended)

No frameworks. No dependencies. No build tools.

---

# ⚙️ Local Development

## Clone Repository

```bash
git clone https://github.com/harshtyagi334/portfolio.git
```

## Open Project Folder

```bash
cd portfolio
```

## Run Locally

Option 1:
Simply open:

```bash
index.html
```

inside your browser.

Option 2 (Recommended):
Use VS Code Live Server.

```bash
Right Click → Open with Live Server
```

---

# ✏️ Customisation Guide

## 🧑 Update Portfolio Content

Edit:

```bash
js/content.js
```

All portfolio content is stored here as HTML strings.

---

## 🎨 Change Theme Colors

Edit variables in:

```bash
css/base.css
```

Example:

```css
:root {
  --bg-color: #008080;
  --window-color: #c0c0c0;
}
```

---

## ➕ Add New Desktop Window

### Step 1 — Add Window Config

Edit:

```bash
js/window-manager.js
```

Add a new object inside `WINDOWS`.

---

### Step 2 — Add Window HTML

Edit:

```bash
index.html
```

Copy an existing window block.

---

### Step 3 — Add Window Content

Edit:

```bash
js/content.js
```

Create a new content section.

---

### Step 4 — Add Desktop Icon & Start Menu Item

Inside:

```bash
index.html
```

add:
- Desktop shortcut
- Start menu entry

---

# 🌍 Deployment

## 🐙 Deploy on GitHub Pages

```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/harshtyagi334/portfolio.git
git push -u origin main
```

Then:

```text
GitHub → Settings → Pages
```

Deploy from:
- Branch: `main`
- Folder: `/ (root)`

Live URL:

```bash
https://harshtyagi334.github.io/portfolio/
```

---

## 🔥 Deploy on Netlify

1. Visit:
https://netlify.com/drop

2. Drag & drop the project folder

3. Site deploys instantly

---

## 🌐 Custom Domain Setup

You can connect:
- `.dev`
- `.tech`
- `.me`

domains using:
- GitHub Pages
- Netlify
- Firebase Hosting

---

# 📈 Future Improvements

- Terminal emulator
- Fake file explorer
- Built-in music player
- Desktop widgets
- Theme switcher
- Window snapping
- AI chatbot assistant
- Retro boot sound
- Browser mini games
- Command palette
- Dynamic wallpapers

---

# 🧠 Performance

✅ Zero frameworks  
✅ Zero dependencies  
✅ Lightweight architecture  
✅ Fast loading speed  
✅ SEO friendly  
✅ Mobile optimized  

---

# 🤝 Contributing

Contributions are welcome.

## Steps

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

## Harsh Tyagi

- GitHub: https://github.com/harshtyagi334
- LinkedIn: https://www.linkedin.com/in/harsh-tyagi-118577312
- Portfolio: https://harshtyagi334.github.io/portfolio/

---

# ⭐ Support

If you like this project:

⭐ Star the repository  
🍴 Fork the project  
📢 Share it with developers  

---

# 💡 Final Note

PixelOS Portfolio is more than just a portfolio website — it's an interactive developer experience that combines nostalgia, creativity, UI engineering, and frontend development into a unique digital portfolio.
