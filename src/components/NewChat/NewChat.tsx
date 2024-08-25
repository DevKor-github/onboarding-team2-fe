import { MdAddCircle } from 'react-icons/md';

function NewChat() {
  return (
    <button className="sticky self-end right-4 bottom-4 mt-auto">
      <MdAddCircle size={48} color="#3189f0" />
    </button>
  );
}

export default NewChat;
