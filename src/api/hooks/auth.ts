import { useMutation } from '@tanstack/react-query';
import { apiInterface } from '../../utils/customAxios';
import { LoginRequest, LoginResponse } from '../types/auth';

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

  return response.data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      // 로그인 성공시 access token 저장
      // payload에서 유저 정보 추출 후 저장
      const payload = data.access_token.split('.')[1];
      const userData = JSON.parse(atob(payload));

      localStorage.setItem('accessToken', data.access_token);
      localStorage.setItem('userData', userData);
    },
  });
};
