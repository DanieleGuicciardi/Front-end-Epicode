import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import MyNav from './assets/components/MyNav.jsx'
import MyFooter from './assets/components/MyFooter.jsx'
import Welcome from './assets/components/Welcome.jsx'
import AllTheBooks from './assets/components/AllTheBooks.jsx'
import BookList from './assets/components/BookList.jsx'
import books from './assets/libri/fantasy.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyNav/>
      <Welcome/>
      <div>
        <BookList books={books} />
      </div>
      {/* <AllTheBooks/> */}
      <MyFooter/>

    </>
  )
}

export default App
