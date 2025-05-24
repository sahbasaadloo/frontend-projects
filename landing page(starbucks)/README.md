# ☕ Starbucks Landing Page

A clean and modern landing page for **Starbucks**, designed with HTML, CSS, and JavaScript. It mimics the look and feel of a real brand website and showcases responsive design, smooth animations, and interactivity.

---

## 🌟 Features

- ✨ Hero section with call-to-action
- 📱 Fully responsive layout
- 🎨 Stylish design inspired by the official Starbucks brand
- 🖱️ Smooth scroll and animations with JavaScript
- 🔄 Toggleable mobile navigation menu

---
## Demo

Live demo of this project is available here:  
[Live Demo](https://6831f04c47913f3acc1c8bbd--thunderous-souffle-20ff54.netlify.app/)

## 📸 Preview

![Mockup](./pics/372d199e690%20(1).png)  
![Mockup](./pics/372d199e690.png)  
![Mockup](./pics/bc41352db90%20(1).png)  
![Mockup](./pics/bc41352db90%20(2).png)  
![Mockup](./pics/bc41352db90%20(3).png)  
![Mockup](./pics/bc41352db90%20(4).png)  
![Mockup](./pics/bc41352db90.png)  
![Mockup](./pics/e08666446e9.png)  


---

## 🔧 Built With

- **HTML5** — semantic structure
- **CSS3** — custom styling with Flexbox & media queries
- **JavaScript (Vanilla)** — for interactivity like mobile menu toggle

---

## 🧠 How It Works
📁 starbucks-landing-page/
├── new.html
├── new.css
├── new.js
├── README.md
└── pics/
    ├── logo.svg
    ├── box-d.jpg
    └── marker.svg

### 🧩 JS Interactivity Example

```js
menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuButton.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
});
