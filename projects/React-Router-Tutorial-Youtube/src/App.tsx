import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Navbar } from './components/Navbar'

function App () {

  return (
    <>
      <header>
        <h1>React Router Tutorial [Youtube]!!!</h1>
        <a href='https://www.youtube.com/playlist?list=PLC3y8-rFHvwjkxt8TOteFdT_YmzwpBlrG' target='_blank' rel='noreferrer'>Youtube Play list</a>
      </header>
      <Navbar/>
      <section>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />
        </Routes>
      </section>
      <footer/>
    </>
  )
}

export default App
