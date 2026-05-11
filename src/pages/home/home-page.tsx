import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/button'
import { DeskIcon } from '../../icons/lib/desk-icon'
import { ScheduleIcon } from '../../icons/lib/schedule-icon'
import { BlackboardIcon } from '../../icons/lib/blackboard-icon'
import { CalendarIcon } from '../../icons/lib/calendar-icon'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col bg-[var(--color-surface)] items-center text-center gap-4 border border-[var(--color-gray-light)] rounded-lg p-6 shadow-sm">
      <div className="h-12 w-12 text-[var(--color-primary)] flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-base font-bold text-[var(--color-text)]">{title}</h3>
      <p className="text-sm font-light text-[var(--color-text-muted)]">
        {description}
      </p>
    </div>
  )
}

const features: FeatureCardProps[] = [
  {
    icon: <DeskIcon height={32} width={32} transform="" />,
    title: 'Reserve mesas',
    description:
      'Encontre mesas disponíveis na biblioteca e reserve rapidamente para estudar.',
  },
  {
    icon: <ScheduleIcon height={32} width={32} />,
    title: 'Agende salas',
    description:
      'Reserve salas para mentorias ou estudos em grupo, com controle de disponibilidade.',
  },
  {
    icon: <BlackboardIcon height={32} width={32} />,
    title: 'Solicite recursos',
    description:
      'Professores podem solicitar projetores, notebooks e outros recursos para suas aulas.',
  },
  {
    icon: <CalendarIcon height={32} width={48} />,
    title: 'Cronogramas',
    description:
      'Visualize onde cada professor estará, com dia, horário e sala de forma organizada.',
  },
]

export function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 px-6 py-6">
        <div className="border border-[var(--color-gray-light)] rounded-lg bg-[var(--color-surface)] w-full">
          <div className="pt-6 px-6">
            <h1 className="text-2xl text-center font-bold text-[var(--color-text)]">
              Gerencie salas e espaços da sua faculdade com facilidade e
              organização.
            </h1>
          </div>

          <div className="flex justify-center pb-6 pt-16">
            <Button
              variant="primary"
              size="large"
              onClick={() => navigate('/login')}
            >
              Começar agora
            </Button>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
