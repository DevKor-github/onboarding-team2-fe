import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../api/hooks/auth';
import { useForm } from 'react-hook-form';
import { LoginForm } from '../../types/loginForm';
import './login.css';

/* Components */
import FormButton from '../../components/FormButton/FormButton';
import FormInput from '../../components/FormInput/FormInput';
import Logo from '../../components/Logo/Logo';

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
    <form className="login" onSubmit={handleSubmit(submitLogin)}>
      <div className="logo-container">
        <Logo />
      </div>
      <p className="login-text">로그인</p>
      <div className="input-container">
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
      </div>
      <div className="buttons-container">
        <FormButton
          text="회원가입"
          type="button"
          isDark={false}
          onClick={() => navigate('/register')}
        />
        <FormButton text="로그인" type="submit" isDark />
      </div>
    </form>
  );
}

export default Login;
