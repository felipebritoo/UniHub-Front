import { useNavigate } from 'react-router-dom'
import { ALink } from '../../components/ALink/a-link'
import { LoginForm } from '../../components/LoginForm/login-form'
import LogoLogin from '../../assets/logo-login.svg'

export function LoginPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen px-[32px] grid gap-8 lg:grid-cols-2">
      <section className="flex flex-col items-center justify-center text-center">
        <img
          src={LogoLogin}
          alt="UniHub"
          className="w-full max-w-[340px] object-contain"
        />

        <div className="mt-6 flex flex-col items-center gap-2">
          <p className="text-base text-[var(--color-text)]">
            Não tem uma conta?
          </p>
          <ALink
            href="/cadastro"
            onClick={(event) => {
              event.preventDefault()
              navigate('/cadastro')
            }}
          >
            Crie agora!
          </ALink>
        </div>
      </section>

      <section className="flex items-center justify-center">
        <LoginForm />
      </section>
    </div>
  )
}
