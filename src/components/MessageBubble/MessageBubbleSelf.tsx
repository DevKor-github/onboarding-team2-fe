import './messageBubble.css';
import read from '../../assets/ReadCheck.svg';
import tip from '../../assets/BubbleTipSelf.svg';

interface MessageBubbleSelfProps {
  message: string;
  time: string;
  isRead: boolean;
}

function MessageBubbleSelf({ message, time, isRead }: MessageBubbleSelfProps) {
  return (
    <div className="message-bubble-container">
      <div className="message-bubble">
        <p className="message-text self-end">{message}</p>
        <div className="message-time">
          <p>{time}</p>
          {isRead && <img src={read}></img>}
        </div>
      </div>
      <img src={tip} className="bubble-tip" />
    </div>
  );
}

export default MessageBubbleSelf;
