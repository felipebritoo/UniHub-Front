export interface Room {
  idSala: number
  nome: string
  predio: string
  capacidade: number
  recursos: string
}

export interface CreateRoomRequest {
  nome: string
  predio: string
  capacidade: number
  recursos: string
}

export type CreateRoomResponse = Room

export type ListRoomsResponse = Room[]
