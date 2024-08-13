/**
 * Register form 타입 정의
 *
 * @param userId
 * @param username
 * @param password
 * @param passwordConfirm
 * @param tags
 */
export interface RegisterForm {
  userId: string;
  username: string;
  password: string;
  passwordConfirm: string;
  tags: string[];
}
