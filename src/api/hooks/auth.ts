import { useMutation } from '@tanstack/react-query';
import { apiInterface } from '../../utils/customAxios';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from '../types/auth';

/**
 * userId, password를 입력 받아 로그인 요청을 보내는 함수
 *
 * @param {string} userId 사용자 아이디
 * @param {string} password 사용자 비밀번호
 * @returns {string} access_token
 */
const login = async ({ userId, password }: LoginRequest) => {
  const response = await apiInterface.post<LoginResponse>('/auth/login', {
    userId,
    password,
  });

  return response;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      // 로그인 성공시 access token 저장
      // payload에서 유저 정보 추출 후 저장
      const token = data.headers.authorization;
      const payload = token.split('.')[1];
      const userData = JSON.parse(atob(payload));
      localStorage.setItem('accessToken', token);
      localStorage.setItem('_id', userData._id);
      localStorage.setItem('userId', userData.userId);
      localStorage.setItem('username', userData.username);
    },
  });
};

/**
 * userId, password, username, status, tags를 입력 받아 회원가입 요청을 보내는 함수
 *
 * @param userId 사용자 아이디
 * @param password 사용자 비밀번호
 * @param username 사용자 닉네임
 * @param status 사용자 밴 여부 - default false
 * @param tags 관심 있는 태그 리스트
 * @returns
 */
const register = async ({
  userId,
  password,
  username,
  status,
  tags,
}: RegisterRequest) => {
  const response = await apiInterface.post<RegisterResponse>('/auth/register', {
    userId,
    password,
    username,
    status,
    tags,
  });

  return response.data;
};

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
    onSuccess: (_) => {
      console.log('Register success');
    },
  });
};
