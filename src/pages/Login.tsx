import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from '../api/hooks/auth';

/* Components */
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { useForm } from 'react-hook-form';
import { LoginForm } from '../types/loginForm';

function Login() {
  const navigate = useNavigate();

  const { mutate: mutateLogin } = useLogin();

  const submitLogin = () => {
    mutateLogin(
      { userId: getValues('userId'), password: getValues('password') },
      {
        onSuccess: () => navigate('/home'),
        onError: () => console.log('error'),
      }
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<LoginForm>({ mode: 'onChange' });

  return (
    <form className="form" onSubmit={handleSubmit(submitLogin)}>
      <FormInput
        id="id"
        label="아이디"
        type="text"
        required
        register={register('userId')}
      />
      <FormInput
        id="password"
        label="비밀번호"
        type="password"
        required
        register={register('password')}
      />
      <FormButton text="로그인" />
      <Link className="text-button justify-right" to="/register">
        회원가입
      </Link>
    </form>
  );
}

export default Login;
