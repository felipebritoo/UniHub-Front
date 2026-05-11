import { useNavigate, useLocation } from 'react-router-dom'
import { Button } from '../Button/button'
import Logo from '../../assets/logo.svg'

export function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const getButtonText = (): string => {
    const path = location.pathname

    if (path === '/') return 'Entrar'
    if (path === '/login' || path === '/cadastro') return 'Voltar'
    return 'Sair'
  }

  const handleButtonClick = (): void => {
    const path = location.pathname

    if (path === '/') {
      navigate('/login')
    } else if (path === '/login' || path === '/cadastro') {
      navigate('/')
    } else {
      navigate('/login')
    }
  }

  const handleLogoClick = (): void => {
    navigate('/')
  }

  return (
    <nav className="flex items-center justify-between bg-[var(--color-surface)] border-b border-[var(--color-gray-light)] rounded-b-[6px] px-6 py-4">
      <button
        type="button"
        onClick={handleLogoClick}
        className="transition-opacity duration-200 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 rounded"
        aria-label="Voltar para home"
      >
        <img src={Logo} alt="Logo" className="h-10 w-10" />
      </button>

      <Button variant="primary" size="small" onClick={handleButtonClick}>
        {getButtonText()}
      </Button>
    </nav>
  )
}
