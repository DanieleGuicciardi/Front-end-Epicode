import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import MyNav from './assets/components/MyNav.jsx'
import MyFooter from './assets/components/MyFooter.jsx'
import Welcome from './assets/components/Welcome.jsx'
import AllTheBooks from './assets/components/AllTheBooks.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyNav/>
      <Welcome/>
      <AllTheBooks/>
      <MyFooter/>

    </>
  )
}

export default App
