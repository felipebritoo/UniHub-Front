import { useCallback, useState } from 'react'
import { Modal } from './modal'
import { TextInput } from '../Input/text-input'
import { Calendar } from '../Calendar/calendar'
import { Select } from '../Select/select'
import { SelectItem } from '../Select/select-item'
import { Button } from '../Button/button'

interface ReservationData {
  name: string
  date: Date | null
  time: string
  justification: string
}

interface ReservationRoomModalProps {
  isOpen: boolean
  onClose: () => void
  roomName: string
  onSubmit: (data: ReservationData) => void
  isLoading?: boolean
  availableTimes?: string[]
}

export function ReservationRoomModal({
  isOpen,
  onClose,
  roomName,
  onSubmit,
  isLoading = false,
  availableTimes = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
  ],
}: ReservationRoomModalProps) {
  const [name, setName] = useState('')
  const [date, setDate] = useState<Date | null>(null)
  const [time, setTime] = useState('')
  const [justification, setJustification] = useState('')

  const canSubmit = !!name && !!date && !!time && !isLoading

  const handleSubmit = useCallback(
    (e?: React.SyntheticEvent) => {
      e?.preventDefault()
      if (!canSubmit) return
      onSubmit({ name, date, time, justification })
    },
    [canSubmit, name, date, time, justification, onSubmit]
  )


  return (
    <Modal
      title={`Reserva da sala ${roomName}`}
      isOpen={isOpen}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextInput label="Nome" value={name} onChange={setName} />
        <div>
          <Calendar selected={date} onChange={setDate} label="Data" />
        </div>
        <Select
          label="Horário"
          value={time}
          onChange={setTime}
          placeholder="Selecione um horário"
        >
          {availableTimes.map((t) => (
            <SelectItem key={t} value={t}>
              {t}
            </SelectItem>
          ))}
        </Select>
        <TextInput
          label="Justificativa"
          value={justification}
          onChange={setJustification}
        />
        <div className="flex justify-center">
          <Button variant="primary" size="large" onClick={() => handleSubmit()}>
            {isLoading ? 'Enviando...' : 'Enviar'}
          </Button>
        </div>
      </form>
    </Modal>
  )
}
