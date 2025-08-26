# Simon Game

A web-based implementation of the classic Simon memory game built with HTML, CSS, and JavaScript.

## 🔗 Live Demo

Play the game live: [Simon Game](https://vercel.com/avinashs-projects-da1d0acf/simon-game/HNtCUgq1KQuyx9NaG84Ec3m1Goss)

---

## 📖 Overview

Simon Game is a digital version of the vintage electronic memory challenge. The objective? Repeat a growing sequence of lit-up colors — each accompanied by a distinct sound. Each round adds another color to the sequence, putting your memory to the test!

---

## 🎮 Game Rules

1. **Start** by pressing any key.  
2. Simon flashes a sequence of colors (e.g., red → blue → yellow).  
3. You repeat the sequence by clicking the buttons in the correct order.  
4. If you get it right, Simon adds one more color to the sequence.  
5. Continue playing until a mistake is made; then it's Game Over.  
6. Press any key to restart.  

---

## 📂 Project Structure

```
Simon-Game/
├── index.html      — Game interface
├── styles.css      — Styling and animations
├── game.js         — Core logic, patterns, sound, and animation
└── sounds/         — Audio files for each color and wrong buzzer
```

---

## 🛠 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/avinashsinghpal/Simon-Game.git
   cd Simon-Game
   ```

2. **Open `index.html`** in your browser.  

   Optionally, run a local server for better compatibility:
   ```bash
   # Using Python (if installed)
   python3 -m http.server 8000
   
   # or using Node.js http-server
   npx http-server
   ```

---

## ✨ Gameplay Highlights

- **Interactive UI**: Four colored buttons that light up and play sounds when activated.  
- **Progressive Levels**: The sequence grows longer with each successful repeat.  
- **Immediate Feedback**: Correct clicks continue the game; a wrong click triggers a game-over sound and message.  
- **Restart Mechanism**: Press any key to restart after a mistake.  

---

## ⭐ Why It Matters

Simon Game is a timeless brain teaser that trains short-term memory, focus, and sequential recall. Plus, building it is a fantastic learning exercise for JavaScript logic, event handling, and DOM manipulation.

---

## 🤝 Contributing

Contributions, ideas, and improvements are welcome! Suggestions include:
- Adding a score display (current level or best score)  
- Enhancing UI with animations or mobile-friendly responsiveness  
- Adding difficulty options or time-based challenges  
- Integrating restart on-screen button  

To contribute:
1. Fork this repository  
2. Create a feature branch (`git checkout -b feature-name`)  
3. Make your changes  
4. Submit a pull request with a brief description of your enhancements  

---

## 📜 License

This project is licensed under the **MIT License** — use freely, contribute, and share.
