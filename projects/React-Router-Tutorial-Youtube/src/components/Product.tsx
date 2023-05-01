import { ProductsNavbar } from './ProductsNavbar'
import { Outlet } from 'react-router-dom'

export function Product () {
  return (

    <section>
        <h1>Products Component!!!</h1>
        <ProductsNavbar />
        <Outlet />
    </section>

  )
}
