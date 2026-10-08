# RGB Color Generator 🎨

A modern, web-based RGB Color Generator featuring a sleek dark glassmorphism design, real-time visual color previewing, custom controls, and one-click clipboard copy functionality.

---

## 🌟 Features

- **Real-Time Color Preview:** Instantly watch the preview container and dynamic glow effect update as you adjust the RGB sliders.
- **Customized Range Sliders:** Distinctly styled Red, Green, and Blue channel sliders (0–255 range) with hover animations.
- **Glassmorphism UI:** Built with backdrop filters, subtle borders, radial background gradients, and modern typography.
- **Instant Copy to Clipboard:** Easily copy the generated `rgb(R, G, B)` code directly to your clipboard with animated button feedback (no intrusive alert popups).
- **Responsive Layout:** Flexbox-powered responsive container that adapts cleanly across screen sizes.

---

## 🛠️ Tech Stack

- **HTML5:** Semantic element markup (`<input type="range">`, `<label>`, `<button>`).
- **CSS3:** Glassmorphism (`backdrop-filter`), CSS variables, custom slider thumbs, flexbox, and dynamic box-shadows.
- **JavaScript (ES6):** Event listeners, string interpolation, DOM manipulation, and `navigator.clipboard` API.

---

## 📁 Project Structure

```text
├── index.html   # Main application markup & slider setup
├── style.css    # Dark glassmorphism styling, custom sliders & animations
└── script.js    # RGB calculation, DOM updates, and clipboard logic
