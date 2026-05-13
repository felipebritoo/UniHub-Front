export interface Table {
  idMesa: number
  nome: string
  lado: string
  disponível: boolean
}

export interface CreateTableRequest {
  nome: string
  lado: string
  disponivel: boolean
  recursos: string
}

export type CreateTableResponse = Table

export type ListTablesResponse = Table[]
