export type AuthoInfo = {
  id: number;
  email: string;
  token: string;
};
export interface ISignIn {
  email: string;
  password: string;
}
export interface ISignUp {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  avatar: string;
}

export interface IError {
  message: string;
  code: number;
}

// export interface CustomErrorMessageProps {
//   message: string;
//   name: string;
// }
