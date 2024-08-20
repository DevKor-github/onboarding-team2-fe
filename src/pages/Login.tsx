import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useLogin } from '../api/hooks/auth';
import { LoginForm } from '../types/loginForm';

/* Components */
import FormButton from '../components/FormButton/FormButton';
import FormInput from '../components/FormInput/FormInput';
import Logo from '../components/Logo/Logo';

function Login() {
  const navigate = useNavigate();
  const { mutate: mutateLogin } = useLogin();

  const submitLogin = () => {
    mutateLogin(
      { userId: getValues('userId'), password: getValues('password') },
      {
        onSuccess: () => navigate('/home'),
        onError: (e) => console.log('error on login: ', e),
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
    <form className="container" onSubmit={handleSubmit(submitLogin)}>
      <div className="logo-container">
        <Logo />
      </div>
      <p className="form-label">로그인</p>
      <div className="input-container">
        <FormInput
          id="id"
          label="아이디"
          type="text"
          required
          register={register('userId', { required: '아이디를 입력하세요' })}
          errors={errors.userId}
        />
        <FormInput
          id="password"
          label="비밀번호"
          type="password"
          required
          register={register('password', { required: '비밀번호를 입력하세요' })}
          errors={errors.password}
        />
      </div>
      {errors && (
        <p className="form-error" hidden={errors == null}>
          {errors.userId?.message || errors.password?.message}
        </p>
      )}
      <div className="form-button-container">
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
