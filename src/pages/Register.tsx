import { useNavigate } from 'react-router-dom';
import { useRegister } from '../api/hooks/auth';
import { useForm } from 'react-hook-form';
import { RegisterForm } from '../types/registerForm';

/* Components */
import FormButton from '../components/FormButton/FormButton';
import FormInput from '../components/FormInput/FormInput';

function Register() {
  const passwordReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const navigate = useNavigate();

  const { mutate: mutateRegister } = useRegister();

  const submitRegister = () => {
    mutateRegister(
      {
        userId: getValues('userId'),
        password: getValues('password'),
        username: getValues('username'),
        status: false,
        tags: getValues('tags'),
      },
      {
        onSuccess: () => navigate('/'),
        onError: () => console.log('error'),
      }
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RegisterForm>({ mode: 'onChange' });

  return (
    <form className="form" onSubmit={handleSubmit(submitRegister)}>
      <FormInput
        id="id"
        label="아이디"
        type="text"
        required
        register={register('userId', { required: '아이디를 입력하세요.' })}
        errors={errors.userId}
      />
      <FormInput
        id="username"
        label="닉네임"
        type="text"
        required
        register={register('username', { required: '닉네임을 입력하세요.' })}
        errors={errors.username}
      />
      <FormInput
        id="password"
        label="비밀번호"
        type="password"
        required
        register={register('password', {
          required: '비밀번호를 입력하세요.',
          minLength: { value: 8, message: '최소 8자리를 입력하세요.' },
          validate: {
            check: (value) => {
              if (!value.match(passwordReg)) {
                return '영문 대/소문자, 숫자, 특수문자를 사용해 주세요.';
              }
            },
          },
        })}
        errors={errors.password}
      />
      <FormInput
        id="confirm-password"
        label="비밀번호 확인"
        type="password"
        required
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
        required
        register={register('tags', { required: '태그를 입력하세요.' })}
      />
      <FormButton text={'회원가입'} />
    </form>
  );
}

export default Register;
