export interface LoginRequest {
  userId: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
}
