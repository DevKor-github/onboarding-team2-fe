import './messageBubble.css';

interface MessageBubbleSelfProps {
  message: string;
  time: string;
  isRead: boolean;
}

function MessageBubbleOther({ message, time, isRead }: MessageBubbleSelfProps) {
  return (
    <div className="message-bubble-container">
      <img src="src/assets/BubbleTipOther.svg" className="bubble-tip" />
      <div className="message-bubble">
        <p className="message-text">{message}</p>
        <div className="message-time">
          <p>{time}</p>
          {isRead && <img src="src/assets/ReadCheck.svg" />}
        </div>
      </div>
    </div>
  );
}

export default MessageBubbleOther;
