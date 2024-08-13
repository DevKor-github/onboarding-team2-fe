import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

/* Components */
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { useLogin } from '../api/hooks/auth';

function Login() {
  const navigate = useNavigate();

  const { mutate: mutateLogin } = useLogin();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutateLogin(
      { userId: id, password: password },
      {
        onSuccess: () => navigate('/home'),
        onError: () => console.log('error'),
      }
    );
  };

  return (
    <div>
      <form className="form" method="post" onSubmit={submitLogin}>
        <FormInput
          id="id"
          label="아이디"
          onChange={(e) => setId(e.target.value)}
          type="text"
          required
        />
        <FormInput
          id="password"
          label="비밀번호"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />
        <FormButton text="로그인" />
        <Link className="text-button justify-right" to="/register">
          회원가입
        </Link>
      </form>
    </div>
  );
}

export default Login;
