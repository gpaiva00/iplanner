import { useAuth } from '../hooks/useAuth'

export const RequireAuth = ({ children }: any) => {
  const { user } = useAuth()
  console.warn({ user })

  return user.name ? children : (window.location.href = '/')
}
