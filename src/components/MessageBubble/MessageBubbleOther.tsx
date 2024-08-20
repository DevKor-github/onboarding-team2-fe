import Avatar from '../Avatar/Avatar';
import './messageBubble.css';

interface MessageBubbleSelfProps {
  message: string;
  name: string;
  time: string;
}

function MessageBubbleOther({ message, name, time }: MessageBubbleSelfProps) {
  return (
    <div className="message-bubble-container">
      <Avatar />
      <img src="src/assets/BubbleTipOther.svg" className="bubble-tip" />
      <div className="message-bubble">
        <p className="sender-name">{name}</p>
        <p className="message-text">{message}</p>
        <div className="message-time">
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
}

export default MessageBubbleOther;
