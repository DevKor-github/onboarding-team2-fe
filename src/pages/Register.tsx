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

  const submitRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(
      'Register success',
      id,
      nickname,
      password,
      passwordConfirm,
      tags
    );
    navigate('/');
  };

  return (
    <div>
      <form className="form" method="post" onSubmit={submitRegister}>
        <FormInput
          id={'id'}
          label={'아이디'}
          onChange={(e) => setId(e.target.value)}
          type={'text'}
          required
        />
        <FormInput
          id={'nickname'}
          label={'닉네임'}
          onChange={(e) => setNickname(e.target.value)}
          type={'text'}
          required
        />
        <FormInput
          id={'password'}
          label={'비밀번호'}
          onChange={(e) => setPassword(e.target.value)}
          type={'password'}
          required
        />
        <FormInput
          id={'confirm-password'}
          label={'비밀번호 확인'}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          type={'password'}
          required
        />
        <FormInput
          id={'tag'}
          label={'태그'}
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
