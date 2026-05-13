export const UserType = {
  ALUNO: 'ALUNO',
  PROFESSOR: 'PROFESSOR',
} as const

export type UserType = (typeof UserType)[keyof typeof UserType]

export const ScheduleType = {
  SALA: 'SALA',
  MESA: 'MESA',
} as const

export type ScheduleType = (typeof ScheduleType)[keyof typeof ScheduleType]

export const ScheduleStatus = {
  PENDENTE: 'PENDENTE',
  CONFIRMADO: 'CONFIRMADO',
  CANCELADO: 'CANCELADO',
  REALIZADO: 'REALIZADO',
} as const

export type ScheduleStatus =
  (typeof ScheduleStatus)[keyof typeof ScheduleStatus]
