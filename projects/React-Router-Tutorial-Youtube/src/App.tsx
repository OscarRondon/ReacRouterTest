import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { Help } from './components/Help'
import { NoMatchUrl } from './components/NoMatch'
import { Product } from './components/Product'
import { ProductsTop } from './components/ProductsTop'
import { ProductsSpecials } from './components/ProductsSpecials'
import { ProductsMain } from './components/ProductsMain'
import { Users } from './components/Users'

function App () {

  const navigate = useNavigate()

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
          <Route path='help' element={<Help/>} />
          <Route path='products' element={<Product/>}>
            <Route index element={<ProductsMain />} />
            <Route path='topProducts' element={<ProductsTop />} />
            <Route path='specialsProducts' element={<ProductsSpecials />} />
          </Route>
          <Route path='users' element={<Users />} />
          <Route path='users/:userId' element={<Users />} />
          <Route path='*' element={<NoMatchUrl/>} />
        </Routes>
      </section>
      <section>
        <button type='button' id='btn_Help' onClick={() => { navigate('/help') }}>Go to Help</button>
      </section>
      <footer/>
    </>
  )
}

export default App
