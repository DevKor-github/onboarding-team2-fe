export interface LoginRequest {
  userId: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
}

export interface RegisterRequest {
  userId: string;
  password: string;
  username: string;
  status: boolean;
  tags: string[];
}

export interface RegisterResponse {}
