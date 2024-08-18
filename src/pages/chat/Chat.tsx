import MessageBubbleOther from '../../components/MessageBubble/MessageBubbleOther';
import MessageBubbleSelf from '../../components/MessageBubble/MessageBubbleSelf';
import Navbar from '../../components/Navbar';

function Chat() {
  return (
    <div>
      <Navbar />
      <div className="message-area message-area-self">
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
      <div className="message-area message-area-other">
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
  );
}

export default Chat;
