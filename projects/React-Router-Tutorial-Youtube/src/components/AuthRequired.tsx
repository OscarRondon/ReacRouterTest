import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../customHooks/useAuth'

interface Props {
  children: JSX.Element
}

export function AuthRequired ({ children }: Props) {
  const auth = useAuth()
  const location = useLocation()

  if (auth === null || auth?.user.userName === '') {
    return <Navigate to="/login" state={{ path: location.pathname }} />
  }

  return children
}
