import { UserType } from "./enums";

export interface User {
  idUsuario: number;
  nome: string;
  ra: string;
  email: string;
  tipoUsuario: UserType;
}

export interface UserWithPassword extends User {
  senha: string;
}