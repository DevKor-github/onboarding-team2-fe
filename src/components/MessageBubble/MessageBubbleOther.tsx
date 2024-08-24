import Avatar from '../Avatar/Avatar';
import './messageBubble.css';
import tip from '../../assets/BubbleTipOther.svg';

interface MessageBubbleSelfProps {
  message: string;
  name: string;
  time: string;
}

function MessageBubbleOther({ message, name, time }: MessageBubbleSelfProps) {
  return (
    <div className="message-bubble-container">
      <Avatar />
      <img src={tip} className="bubble-tip" />
      <div className="message-bubble">
        <p className="sender-name">{name}</p>
        <p className="message-text self-start">{message}</p>
        <div className="message-time">
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
}

export default MessageBubbleOther;
