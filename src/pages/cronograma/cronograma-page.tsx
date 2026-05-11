import { useState } from 'react'
import { PersonIcon, HomeIcon, TimerIcon } from '@radix-ui/react-icons'
import { MenuCard } from '../../components/Menu/menu-card'
import { Select } from '../../components/Select/select'
import { SelectItem } from '../../components/Select/select-item'
import {
  InfoCard,
  InfoCardHeader,
  InfoCardTitle,
  InfoCardItem,
} from '../../components/InfoCard/info-card'
import { Badge } from '../../components/Badge/badge'
import { schedulesMock, weekDays } from './mocks/cronograma-mocks'

function ScheduleCardItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-3 w-3 text-[var(--color-text-muted)] flex-shrink-0">
        {icon}
      </div>
      <div className="flex flex-col min-w-0">
        <p className="text-xs text-[var(--color-text-muted)]">{label}</p>
        <p className="text-xs font-medium text-[var(--color-text-muted)] truncate">
          {value}
        </p>
      </div>
    </div>
  )
}

function ScheduleCard({
  classCode,
  className,
  teacher,
  location,
  schedule,
}: {
  classCode: string
  className: string
  teacher: string
  location: string
  schedule: string
}) {
  return (
    <InfoCard>
      <InfoCardHeader>
        <Badge>{classCode}</Badge>
      </InfoCardHeader>

      <InfoCardTitle className="text-base font-bold text-[var(--color-text)] mb-4">
        {className}
      </InfoCardTitle>

      <div className="flex flex-col gap-3">
        <ScheduleCardItem
          icon={<PersonIcon />}
          label="Professor"
          value={teacher}
        />
        <ScheduleCardItem icon={<HomeIcon />} label="Sala" value={location} />
        <ScheduleCardItem
          icon={<TimerIcon />}
          label="Horário"
          value={schedule}
        />
      </div>
    </InfoCard>
  )
}

export function CronogramaPage() {
  const [selectedDay, setSelectedDay] = useState('')

  return (
    <div className="px-6 py-6 flex gap-8">
      <aside className="w-64 flex-shrink-0">
        <MenuCard />
      </aside>

      <main className="flex-1">
        <Select
          label="Selecione o dia"
          value={selectedDay}
          onChange={setSelectedDay}
          placeholder="Escolha um dia da semana"
        >
          {weekDays.map((day) => (
            <SelectItem key={day} value={day}>
              {day}
            </SelectItem>
          ))}
        </Select>

        <div className="mt-12 grid grid-cols-4 gap-6">
          {schedulesMock.map((schedule) => (
            <ScheduleCard
              key={schedule.classCode}
              classCode={schedule.classCode}
              className={schedule.className}
              teacher={schedule.teacher}
              location={schedule.location}
              schedule={schedule.schedule}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
