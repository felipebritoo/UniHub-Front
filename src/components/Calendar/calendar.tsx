import { useCallback } from 'react'
import DatePicker from 'react-datepicker'
import { registerLocale } from 'react-datepicker'
import { ptBR } from 'date-fns/locale/pt-BR'
import 'react-datepicker/dist/react-datepicker.css'
import './calendar.css'

registerLocale('pt-BR', ptBR)

interface CalendarProps {
  selected: Date | null
  onChange: (date: Date | null) => void
  label?: string
  disabled?: boolean
  minDate?: Date
  maxDate?: Date
  placeholderText?: string
}

export function Calendar({
  selected,
  onChange,
  label = 'Selecione uma data',
  disabled = false,
  minDate,
  maxDate,
  placeholderText = 'dd/mm/yyyy',
}: CalendarProps) {
  const handleChange = useCallback(
    (date: Date | null) => {
      onChange(date)
    },
    [onChange]
  )

  return (
    <div className="calendar-container">
      {label && <label className="calendar-label">{label}</label>}
      <DatePicker
        selected={selected}
        onChange={handleChange}
        disabled={disabled}
        minDate={minDate}
        maxDate={maxDate}
        placeholderText={placeholderText}
        dateFormat="dd/MM/yyyy"
        locale="pt-BR"
        className="calendar-input"
        wrapperClassName="calendar-wrapper"
        calendarClassName="calendar-popup"
        popperClassName="calendar-popper"
        popperPlacement="bottom-start"
        
        showPopperArrow={false}
        todayButton="Hoje"
      />
    </div>
  )
}
