import { /* Link */ NavLink } from 'react-router-dom'
import { useAuth } from '../customHooks/useAuth'

export function Navbar () {
  const auth = useAuth()

  return (
    <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
            <li><NavLink to="products">Products</NavLink></li>
            <li><NavLink to="users">Users</NavLink></li>
            <li><NavLink to="profile">Profile</NavLink></li>
            {
              (auth?.user.userName === '') && (<li><NavLink to="/login">Login</NavLink></li>)
            }
        </ul>
    </nav>
  )
}

/*
The component Link of react-router-dom is used to navigate between pages.
It can also be use the component NavLink of react-router-dom. wich works the same way of Link component, but adds a class to the element when it's active.
*/
