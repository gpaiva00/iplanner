import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import CustomInput from '../components/CustomInput'
import HomeAvatar from '../components/HomeAvatar'
import HomeHeader from '../components/HomeHeader'
import { useAuth } from '../hooks/useAuth'

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const { login } = useAuth()

  const handleLogin = () => {
    setIsLoading(true)
    const loginResult = login({ name: userName, password })

    if (!loginResult) {
      alert('Usuário ou senha inválidos')
      setUserName('')
      setPassword('')
      setIsLoading(false)
      return
    }

    setTimeout(() => {
      navigate('/dashboard')
      setUserName('')
      setPassword('')
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="gradient-background flex flex-col min-h-screen">
      <HomeHeader showLoginButton={false} />

      <div className="flex flex-col flex-1 justify-center items-center">
        <HomeAvatar />

        <div className="flex flex-col gap-24 justify-center items-center">
          <div className="flex flex-col items-center gap-4 mt-8 mb-16 transition-all opacity-1 ease-in-out">
            <h1 className="title">Faça login para continuar</h1>

            <div className="flex flex-col justify-center items-center gap-4">
              <CustomInput
                value={userName}
                onChange={event => setUserName(event.target.value)}
                placeholder="Nome de usuário"
              />
              <CustomInput
                value={password}
                onChange={event => setPassword(event.target.value)}
                placeholder="Senha"
                type="password"
                onKeyDown={event => {
                  if (event.key === 'Enter') {
                    handleLogin()
                  }
                }}
              />

              <Button
                onClick={handleLogin}
                disabled={isLoading}
                isLoading={isLoading}
                size="full"
              >
                Entrar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
