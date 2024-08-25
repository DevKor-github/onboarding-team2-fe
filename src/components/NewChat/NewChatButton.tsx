import { MdAddCircle } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function NewChatButton() {
  const navigate = useNavigate();
  return (
    <button
      className="sticky self-end right-4 bottom-4 mt-auto"
      onClick={() => navigate('/home/new-chat')}
    >
      <MdAddCircle size={48} color="#3189f0" />
    </button>
  );
}

export default NewChatButton;
