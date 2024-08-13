import { useState } from 'react';

/* Components */
import Navbar from '../../components/Navbar';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';

function ResetPassword() {
  const [curPassword, setCurPassword] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const resetPassword = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(
      'Reset password success',
      curPassword,
      password,
      passwordConfirm
    );
  };

  return (
    <div>
      <Navbar />
      <form className="form" method="post" onSubmit={resetPassword}>
        <FormInput
          id="cur-password"
          label="현재 비밀번호"
          onChange={(e) => setCurPassword(e.target.value)}
          type="password"
          required
        />
        <FormInput
          id="password"
          label="새 비밀번호"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />
        <FormInput
          id="password-confirm"
          label="새 비밀번호 확인"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          type="password"
          required
        />
        <FormButton text="변경" />
      </form>
    </div>
  );
}

export default ResetPassword;
