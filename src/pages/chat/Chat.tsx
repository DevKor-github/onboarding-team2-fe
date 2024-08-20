import { useEffect } from 'react';
import { socket } from '../../utils/socket';

/* Components */
import MessageBubbleOther from '../../components/MessageBubble/MessageBubbleOther';
import MessageBubbleSelf from '../../components/MessageBubble/MessageBubbleSelf';
import MessageInput from '../../components/MessageInput/MessageInput';
import Navbar from '../../components/Navbar';

function Chat() {
  useEffect(() => {
    socket.emit('joinRoom', {
      roomId: '66c045da1dbb6222e6c753f9',
      userId: localStorage.getItem('_id')!,
    });
  }, [socket]);

  return (
    <div>
      <Navbar />
      <div className="message-area">
        <div className="message-area-self">
          <MessageBubbleSelf
            message={`저번에 갔던 곳 좋은 것 같아요.\n저번에 갔던 곳 좋은 것 같아요ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ.`}
            time="오전 11:30"
            isRead
          />
          <MessageBubbleSelf
            message={`저번에 갔던 곳 좋은 것 같아요.\n저번에 갔던 곳 좋은 것 같아요ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ.`}
            time="오전 11:30"
            isRead
          />
        </div>
        <div className="message-area-other">
          <MessageBubbleOther
            message={`저번에 갔던 곳 좋은 것 같아요.\n저번에 갔던 곳 좋은 것 같아요ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ.`}
            time="오전 11:30"
          />
          <MessageBubbleOther
            message={`저번에 갔던 곳 좋은 것 같아요.\n저번에 갔던 곳 좋은 것 같아요ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ.`}
            time="오전 11:30"
          />
        </div>
      </div>
      <MessageInput />
    </div>
  );
}

export default Chat;
