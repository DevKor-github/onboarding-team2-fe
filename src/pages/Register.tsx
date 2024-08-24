import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRegister } from '../api/hooks/auth';
import { RegisterFormType } from '../types/registerFormType';

/* Components */
import FormButton from '../components/FormButton/FormButton';
import FormInput from '../components/FormInput/FormInput';
import Logo from '../components/Logo/Logo';

function Register() {
  const passwordReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const navigate = useNavigate();

  const { mutate: mutateRegister } = useRegister();

  const submitRegister = () => {
    mutateRegister(
      {
        userId: getValues('userId').trim(),
        password: getValues('password').trim(),
        username: getValues('username').trim(),
        status: false,
        tags: getValues('tags')
          .split(',')
          .map((tag) => tag.trim())
          .filter((tags) => tags != ''),
      },
      {
        onSuccess: () => navigate('/'),
        onError: (e) => console.log('Error during register', e),
      }
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RegisterFormType>({ mode: 'onChange' });

  return (
    <form className="container" onSubmit={handleSubmit(submitRegister)}>
      <div className="logo-container">
        <Logo />
      </div>
      <p className="form-label">회원가입</p>
      <div className="input-container">
        <FormInput
          id="id"
          label="아이디"
          type="text"
          register={register('userId', { required: '아이디를 입력하세요.' })}
          errors={errors.userId}
        />
        <FormInput
          id="username"
          label="닉네임"
          type="text"
          register={register('username', { required: '닉네임을 입력하세요.' })}
          errors={errors.username}
        />
        <FormInput
          id="password"
          label="비밀번호"
          type="password"
          register={register('password', {
            required: '비밀번호를 입력하세요.',
            minLength: { value: 8, message: '최소 8자리를 입력하세요.' },
            pattern: {
              value: passwordReg,
              message: '영문 대/소문자, 숫자, 특수문자를 사용해 주세요.',
            },
          })}
          errors={errors.password}
        />
        <FormInput
          id="confirm-password"
          label="비밀번호 확인"
          type="password"
          register={register('passwordConfirm', {
            required: '비밀번호를 확인하세요.',
            validate: {
              check: (value) => {
                if (getValues('password') !== value) {
                  return '비밀번호가 일치하지 않습니다.';
                }
              },
            },
          })}
          errors={errors.passwordConfirm}
        />
        <FormInput
          id="tag"
          label="태그"
          type="text"
          register={register('tags', {
            required: '태그는 하나 이상 입력해야 합니다.',
          })}
          errors={errors.tags}
        />
      </div>
      {errors && (
        <p className="form-error">
          {errors.userId?.message ||
            errors.username?.message ||
            errors.password?.message ||
            errors.passwordConfirm?.message ||
            errors.tags?.message}
        </p>
      )}
      <div className="form-button-container">
        <FormButton text="회원가입" type="submit" isDark />
      </div>
    </form>
  );
}

export default Register;
