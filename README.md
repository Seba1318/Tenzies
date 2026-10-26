# Tenzies

A browser version of Tenzies built with React and Vite. Roll ten dice, hold the ones you want to keep, and try to get every die to show the same number.

## How to play

1. Select any die to hold it at its current value.
2. Press **Roll** to reroll every die that is not held.
3. Keep holding matching dice and rolling the rest until all ten dice show the same value.
4. When you win, confetti appears and the button changes to **New Game**. Start another game with that button.

## Getting started

You’ll need Node.js and npm installed.

```bash
git clone https://github.com/Seba1318/Tenzies.git
cd Tenzies
npm ci
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot module replacement. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Serve the production build locally. Run `npm run build` first. |
| `npm run lint` | Check the project with ESLint. |

## Built with

- React and React DOM
- Vite
- `nanoid` for die identifiers
- `react-confetti` for the win animation
- CSS for the game layout and styling

## Project structure

```text
src/
  App.jsx              Game state and Tenzies rules
  components/Die.jsx   Individual clickable die
  index.css            Global styles and game layout
  index.jsx            React entry point
```
