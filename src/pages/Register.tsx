import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

/* Components */
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';

function Register() {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [tags, setTags] = useState('');

  const submitRegister = async (event: React.FormEvent<HTMLFormElement>) => {
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

    console.log('Register success');
    navigate('/');
  };

  return (
    <div className="flex center">
      <form className="form" method="post" onSubmit={submitRegister}>
        <FormInput
          id={'id'}
          placeholder={'아이디'}
          onChange={(e) => setId(e.target.value)}
          type={'text'}
          required
        />
        <FormInput
          id={'nickname'}
          placeholder={'닉네임'}
          onChange={(e) => setNickname(e.target.value)}
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
        <FormInput
          id={'confirm-password'}
          placeholder={'비밀번호 확인'}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          type={'password'}
          required
        />
        <FormInput
          id={'tag'}
          placeholder={'태그'}
          onChange={(e) => setTags(e.target.value)}
          type={'text'}
          required
        />
        <FormButton text={'회원가입'} />
      </form>
    </div>
  );
}

export default Register;
