# 💌 Birthday Surprise Website

A romantic interactive birthday surprise website — built with pure HTML, CSS, and JavaScript. Perfect for surprising your loved one with a personalized, step-by-step experience.

![Preview](https://img.shields.io/badge/Made%20with-Love-ff477e?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ Features

- 🔐 **PIN Lock Screen** — Secure the surprise with a secret 4-digit PIN
- 💌 **Envelope Opening** — Animated envelope that reveals the invitation
- 📖 **Secret Diary** — A heartfelt personal letter
- 📸 **Memory Photo Stack** — Interactive polaroid photos you can shuffle through
- 🎂 **Candle Blowing** — Tap the candle to "blow" it out with confetti
- 🫧 **Floating Wishes** — Pop bubbles to reveal sweet wishes
- 🎁 **Gift Box Surprise** — Final gift reveal with confetti celebration
- 💖 **Floating Hearts Background** — Animated hearts floating across the screen
- 🎵 **Background Music** — Auto-plays on first click (optional)

---

## 🚀 Live Demo

> Add your GitHub Pages link here after deploying, e.g.  
> `https://yourusername.github.io/birthday-surprise/`

---

## 📁 Project Structure
birthday-surprise/
├── index.html # Main HTML structure (all stages)
├── style.css # Styling, animations, and layout
├── script.js # Interactivity and stage logic
└── README.md # This file


---

## 🛠️ How to Use

### 1. Clone this repository

```bash
git clone https://github.com/yourusername/birthday-surprise.git
cd birthday-surprise

# Using Python
python -m http.server 8000

# Using Node.js
npx serve

const SECRET_PIN = "2704"; // 👈 Change this to your special date/numbers

<div class="diary-card">
    Dearest Love,<br><br>
    Your custom message here...<br><br>
    Love always ❤️
</div>

<img src="YOUR_PHOTO_URL_OR_PATH.jpg" alt="Foto 1">

<div class="bubble" onclick="popBubble(this, 'Your custom wish here!')">
    Bubble Label ✨
</div>

<audio id="bgm" loop>
    <source src="YOUR_MUSIC_URL.mp3" type="audio/mpeg">
</audio>
