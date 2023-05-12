import { useNavigate } from 'react-router-dom'
import { useAuth } from '../customHooks/useAuth'
export function Profile () {

  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    auth?.logout()
    navigate('/')
  }

  return (
    <>
    <section>
        <h1>Profile Component!!!</h1>
        <p>User: {auth?.user.userName}</p>
    </section>
    <div>
      <button type='button' onClick={handleLogout}>Sign Out</button>
    </div>
    </>

  )
}
