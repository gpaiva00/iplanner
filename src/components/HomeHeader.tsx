import { useNavigate } from 'react-router-dom'
import Button from './Button'

interface HomeHeaderProps {
  showLoginButton?: boolean
}

export default function HomeHeader(props: HomeHeaderProps) {
  const { showLoginButton = true } = props
  const navigate = useNavigate()

  const handleGoToLogin = () => {
    navigate('/login')
  }

  return (
    <div className="w-full flex justify-between items-center px-4 lg:px-10 py-3 lg:py-5">
      <a href="/" className="header-title">
        iPlanner
      </a>
      {showLoginButton && (
        <Button variant="outline-primary" onClick={handleGoToLogin}>
          Login
        </Button>
      )}
    </div>
  )
}
