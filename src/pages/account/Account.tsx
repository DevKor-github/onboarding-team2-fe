import { useState } from 'react';
import { Link } from 'react-router-dom';

/* Components */
import Navbar from '../../components/Navbar';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';

function Account() {
  const [id, setId] = useState('');
  const [nickname, setNickname] = useState('');
  const [tags, setTags] = useState('');

  const updateAccount = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Update success', id, nickname, tags);
  };

  return (
    <div>
      <Navbar />
      <form className="form" method="post" onSubmit={updateAccount}>
        <FormInput
          id="id"
          label="아이디"
          onChange={(e) => setId(e.target.value)}
          type="text"
          required={false}
        />
        <FormInput
          id="nickname"
          label="닉네임"
          onChange={(e) => setNickname(e.target.value)}
          type="text"
          required={false}
        />
        <FormInput
          id="tag"
          label="태그"
          onChange={(e) => setTags(e.target.value)}
          type="text"
          required={false}
        />
        <FormButton text="저장" />
        <Link className="text-button justify-right" to="/account/resetPassword">
          비밀번호 변경
        </Link>
      </form>
    </div>
  );
}

export default Account;
