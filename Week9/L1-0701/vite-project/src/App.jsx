import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonComponent from './buttonComponent'
import ImageComponent from './imageComponent'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          The file is edited!
        </p>
      </div>
      <ButtonComponent buttonLabel="Try to click me!" />
      <ImageComponent imgSource="https://lastfm.freetls.fastly.net/i/u/300x300/e98d14610e9739f6d5af237bab88d361.jpg" imgAlt="bruno" />
    </>
  )
}




export default App
