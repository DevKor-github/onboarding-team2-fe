import { useState } from 'react';
import FormInput from '../../components/FormInput';
import Navbar from '../../components/Navbar';
import FormButton from '../../components/FormButton';
import { Link } from 'react-router-dom';

function Account() {
  const [id, setId] = useState('');
  const [nickname, setNickname] = useState('');
  const [tags, setTags] = useState('');

  const updateAccount = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));

    console.log('Update success');
  };

  return (
    <div>
      <Navbar />
      <div className="flex center">
        <form className="form" method="post" onSubmit={updateAccount}>
          <FormInput
            id={'id'}
            placeholder={'아이디'}
            onChange={(e) => setId(e.target.value)}
            type={'text'}
            required={false}
          />
          <FormInput
            id={'nickname'}
            placeholder={'닉네임'}
            onChange={(e) => setNickname(e.target.value)}
            type={'text'}
            required={false}
          />
          <FormInput
            id={'tag'}
            placeholder={'태그'}
            onChange={(e) => setTags(e.target.value)}
            type={'text'}
            required={false}
          />
          <FormButton text={'저장'} />
          <Link
            className="text-button justify-right"
            to={'/account/resetPassword'}
          >
            비밀번호 변경
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Account;
