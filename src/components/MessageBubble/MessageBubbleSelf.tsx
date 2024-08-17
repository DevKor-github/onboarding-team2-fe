import './messageBubble.css';

interface MessageBubbleSelfProps {
  message: string;
  time: string;
  isRead: boolean;
}

function MessageBubbleSelf({ message, time, isRead }: MessageBubbleSelfProps) {
  return (
    <div className="message-bubble-container">
      <div className="message-bubble">
        <p className="message-text">{message}</p>
        <div className="message-time">
          <p>{time}</p>
          {isRead && <img src="src/assets/ReadCheck.svg"></img>}
        </div>
      </div>
      <img src="src/assets/BubbleTipSelf.svg" className="bubble-tip" />
    </div>
  );
}

export default MessageBubbleSelf;
