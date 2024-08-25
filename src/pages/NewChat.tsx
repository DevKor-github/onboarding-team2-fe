import { useNavigate } from 'react-router-dom';
import FormButton from '../components/FormButton/FormButton';
import FormInput from '../components/FormInput/FormInput';
import { useForm } from 'react-hook-form';
import { NewChatFormType } from '../types/newChatFormType';
import { useCreateNewChat } from '../api/hooks/chatrooms';

function NewChat() {
  const navigate = useNavigate();
  const { mutate: mutateNewChat } = useCreateNewChat();

  const createNewChat = () => {
    mutateNewChat(
      {
        name: getValues('name').trim(),
        tags: getValues('tags')
          .split(',')
          .map((tag) => tag.trim())
          .filter((tags) => tags != ''),
      },
      {
        onSuccess: () => navigate('/home'),
        onError: (e) => console.log('Error creating chatroom', e),
      }
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<NewChatFormType>({ mode: 'onChange' });

  return (
    <form onSubmit={handleSubmit(createNewChat)}>
      <p className="form-label">채팅방 생성</p>
      <div className="input-container">
        <FormInput
          id="name"
          label="채팅방 이름"
          type="text"
          register={register('name', {
            required: '채팅방 이름을 입력하세요.',
          })}
          errors={errors.name}
        />
        <FormInput
          id="tags"
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
          {errors.name?.message || errors.tags?.message}
        </p>
      )}
      <div className="form-button-container">
        <FormButton text="채팅방 생성" type="submit" isDark />
      </div>
    </form>
  );
}

export default NewChat;
