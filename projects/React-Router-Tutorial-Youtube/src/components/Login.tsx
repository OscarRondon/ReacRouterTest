import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../customHooks/useAuth'
import { useUser } from '../customHooks/useUser'

export function Login () {
  const { user, setUserData } = useUser()
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const redirectPath = location.state?.path || '/'

  const handleLogin = () => {
    auth?.login(user)
    console.log(location.state)
    navigate(redirectPath, { replace: true })
  }

  return (
    <div>
      <label>
        Username:
        <input
          type="text"
          value={user.userName}
          onChange={e => { setUserData({ ...user, userName: e.target.value }) }}
          autoComplete='false'
        />
      </label>
      <button type='button' onClick={handleLogin}>Login</button>
    </div>
  )
}
