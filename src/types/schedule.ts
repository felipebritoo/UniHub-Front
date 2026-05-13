import { ScheduleStatus, ScheduleType } from './enums'

export interface CreateScheduleRequest {
  idUsuario: number
  idSala: number
  tipo: ScheduleType
  data: string // dd/mm/yyyy
  horário: string // hh:mm:ss
  justificativa: string
}

export interface Schedule {
  idAgendamento: string
  idUsuario: number
  idSala: number
  nomeUsuario: string
  tipo: ScheduleType
  data: string // dd/mm/yyyy
  status: ScheduleStatus
  horário: string // hh:mm:ss
  justificativa: string
}

export type CreateScheduleResponse = Schedule

export type ListSchedulesResponse = Schedule[]
