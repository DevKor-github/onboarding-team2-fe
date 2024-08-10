import { useState } from 'react';
import FormInput from '../components/FormInput';
import Navbar from '../components/Navbar';
import FormButton from '../components/FormButton';

function ResetPassword() {
  const [curPassword, setCurPassword] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const resetPassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
  };

  return (
    <div>
      <Navbar />
      <div className="flex center">
        <form className="form" method="post" onSubmit={resetPassword}>
          <FormInput
            id={'cur-password'}
            placeholder={'현재 비밀번호'}
            onChange={(e) => setCurPassword(e.target.value)}
            type={'password'}
            required
          />
          <FormInput
            id={'password'}
            placeholder={'새 비밀번호'}
            onChange={(e) => setPassword(e.target.value)}
            type={'password'}
            required
          />
          <FormInput
            id={'password-confirm'}
            placeholder={'새 비밀번호 확인'}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            type={'password'}
            required
          />
          <FormButton text={'변경'} />
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
