import './messageInput.css';
import icon from '../../assets/IconButton.svg';
import { useState } from 'react';

interface messageInputProps {
  onSendMessage: (message: string) => void;
}

function MessageInput({ onSendMessage }: messageInputProps) {
  const [message, setMessage] = useState('');

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form className="message-input-container shadow-top" onSubmit={sendMessage}>
      <button>
        <img src={icon} className="message-icon-button" />
      </button>
      <div className="message-input-area">
        <input
          className="message-input"
          placeholder="메시지를 입력하세요..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="message-send-button" type="submit">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="paper-airplane" clipPath="url(#clip0_10_1517)">
              <path
                id="Icon"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.59168 3.21245L2.38083 7.75004H7.25001C7.66422 7.75004 8.00001 8.08582 8.00001 8.50004C8.00001 8.91425 7.66422 9.25004 7.25001 9.25004H2.38083L1.59168 13.7876L13.9294 8.50004L1.59168 3.21245ZM0.988747 8.50004L0.0636748 3.18087C-0.0111098 2.75086 0.128032 2.31135 0.436661 2.00272C0.824446 1.61494 1.40926 1.50231 1.91333 1.71834L15.3157 7.4622C15.7308 7.64013 16 8.04835 16 8.50004C16 8.95172 15.7308 9.35995 15.3157 9.53788L1.91333 15.2817C1.40926 15.4978 0.824446 15.3851 0.436661 14.9974C0.128032 14.6887 -0.01111 14.2492 0.0636748 13.8192L0.988747 8.50004Z"
              />
            </g>
            <defs>
              <clipPath id="clip0_10_1517">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
