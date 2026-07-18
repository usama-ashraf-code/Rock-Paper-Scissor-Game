# 🪨📄✂️ Rock, Paper, Scissors – Premium Web Game

A modern, fast, and visually appealing **Rock, Paper, Scissors** game built using vanilla web technologies. The project focuses on clean DOM manipulation, event-driven state tracking, and local storage data persistence.

---

## 🚀 Features

* **Dynamic UI Updates:** Uses direct JavaScript DOM text replacement (`=`) instead of accumulation (`+=`) to ensure match status text updates seamlessly without cluttering the screen.
* **Persistent Scoreboard:** Integrated with browser `LocalStorage` to cache user and computer scores, allowing game progress to be preserved even after a page refresh.
* **Randomized AI Engine:** Features a mathematical random choice generator that cycles through data choices dynamically for the computer's turn.
* **Glassmorphic UI Elements:** A premium, dark-themed presentation built with contemporary CSS layouts, clean cards, and custom responsive layouts.

---

## 🛠️ Tech Stack

* **HTML5:** Clean structural semantics utilizing descriptive element IDs for direct script targeting.
* **CSS3:** Built with flexible layouts (Flexbox), interactive hover transitions, custom gradients, and container alignments.
* **JavaScript (ES6):** Core engine handles event listeners, execution conditional blocks (`if/else if`), memory reads/writes via `localStorage`, and DOM rendering.

---

## 📁 Project Structure

```text
├── index.html       # Structural layout and container elements
├── style.css        # Interactive design and visual presentation
└── script.js        # Core game engine, score logic, and memory controls
