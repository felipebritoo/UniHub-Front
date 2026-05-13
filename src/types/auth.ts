import type { UserWithPassword } from "./user";

// Cadastro (Sign Up)
export interface SignUpRequest {
  nome: string;
  ra: string;
  email: string;
  senha: string;
  tipoUsuario: "ALUNO" | "PROFESSOR";
}

export interface SignUpSuccessResponse {
  message: "Usuário cadastrado com sucesso";
}

export interface SignUpErrorResponse {
  error: "E-mail já cadastrado" | string;
}

// Login
export interface LoginRequest {
  identifier: string; // email ou ra
  senha: string;
}

export type LoginSuccessResponse = UserWithPassword;

export interface LoginErrorResponse {
  error: "Erro ao efetuar o login" | string;
}