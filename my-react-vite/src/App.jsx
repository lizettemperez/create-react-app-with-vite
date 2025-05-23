import { useState } from 'react'
import './App.css'
import CatFact from './CatFact'; // Make sure this file exists!

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>🐱 Mood Emoji Dashboard</h1>
      </header>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>

      <section>
        <h2>Today's Cat Fact:</h2>
        <CatFact />
      </section>

      <footer className="read-the-docs">
        Created with React + Vite ✨
      </footer>
    </>
  )
}

export default App
