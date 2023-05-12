import { useContext, createContext } from 'react'
import { type User } from '../types/users.d'
import { initialState, useUser } from './useUser'


interface AuthContextProps {
  user: User
  login: (userData: User) => void
  logout: () => void
}
const AuthContext = createContext<AuthContextProps | null>(null)

interface Props {
  children: JSX.Element[]
}

export const AuthProvider = ({ children }: Props) => {

  const { user, setUserData } = useUser()


  const login = (userData: User) => {
    setUserData(userData)
  }

  const logout = () => {
    setUserData(initialState)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
