import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

/* Components */
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';

function Login() {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));

    // const response = await fetch('로그인 서버 주소', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     id: id,
    //     password: password,
    //   }),
    // });
    // const result = await response.json();

    // if (response.status === 200) {
    //   console.log('로그인성공, 이메일주소:' + result.email);
    // }

    console.log('Login success');
    navigate('/home');
  };

  return (
    <div className="flex center">
      <form className="form" method="post" onSubmit={submitLogin}>
        <FormInput
          id={'id'}
          placeholder={'아이디'}
          onChange={(e) => setId(e.target.value)}
          type={'text'}
          required
        />
        <FormInput
          id={'password'}
          placeholder={'비밀번호'}
          onChange={(e) => setPassword(e.target.value)}
          type={'password'}
          required
        />
        <FormButton text={'로그인'} />
        <Link className="text-button justify-right" to={'/register'}>
          회원가입
        </Link>
      </form>
    </div>
  );
}

export default Login;
