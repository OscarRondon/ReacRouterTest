import { Link } from 'react-router-dom'

export function ProductsNavbar () {
  return (
    <nav>
        <ul>
            <li><Link to="topProducts">Top products</Link></li>
            <li><Link to="specialsProducts">Specials offers</Link></li>
        </ul>
    </nav>
  )
}
