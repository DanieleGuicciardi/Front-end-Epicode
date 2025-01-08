import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import MyNav from './assets/components/MyNav.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyNav/>

    </>
  )
}

export default App
