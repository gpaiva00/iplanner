import { useContext, createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import loginMock from '../mocks/login.json'

interface User {
  name: string
  password: string
}

interface AuthContextProps {
  user: User
  login: ({ name, password }: User) => boolean
  logout: () => void
}

const AuthContext = createContext({} as AuthContextProps)

function AuthProvider({ children }) {
  const [user, setUser] = useState<User>({} as User)
  const navigate = useNavigate()

  const login = ({ name, password }: { name: string; password: string }) => {
    const isValid =
      loginMock.username === name && loginMock.password === password

    if (!isValid) return false

    setUser({
      name,
      password
    })

    return true
  }

  const logout = () => {
    setUser({} as User)
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used whithin an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
