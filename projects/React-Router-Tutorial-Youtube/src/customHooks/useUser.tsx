import { useState } from 'react'
import { type User } from '../types/users.d'

export const initialState: User = {
  id: '',
  userName: '',
  name: '',
  lastName: '',
  email: ''
}

export function useUser () {
  const [user, setUser] = useState<User>(initialState)

  const setUserData = (userData: User) => {
    setUser(userData)
  }

  return {
    user,
    setUserData
  }
}
