import Avatar from '../Avatar/Avatar';
import './messageBubble.css';

interface MessageBubbleSelfProps {
  message: string;
  time: string;
}

function MessageBubbleOther({ message, time }: MessageBubbleSelfProps) {
  return (
    <div className="message-bubble-container">
      <Avatar />
      <img src="src/assets/BubbleTipOther.svg" className="bubble-tip" />
      <div className="message-bubble">
        <p className="message-text">{message}</p>
        <div className="message-time">
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
}

export default MessageBubbleOther;
