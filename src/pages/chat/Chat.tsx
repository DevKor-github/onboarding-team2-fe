import { useEffect, useRef } from 'react';
import { socket } from '../../utils/socket';

/* Components */
import MessageBubbleOther from '../../components/MessageBubble/MessageBubbleOther';
import MessageBubbleSelf from '../../components/MessageBubble/MessageBubbleSelf';
import MessageInput from '../../components/MessageInput/MessageInput';
import Topbar from '../../components/Topbar/Topbar';
import Profile from '../../components/Profile/Profile';

function Chat() {
  // 채팅 스크롤
  const chatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    socket.emit('joinRoom', {
      roomId: '66c045da1dbb6222e6c753f9',
      userId: localStorage.getItem('_id')!,
    });

    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [socket]);

  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <Profile name="원하진" />
      <div className="flex-1 overflow-hidden message-container">
        <div
          className="flex flex-col-reverse h-full overflow-y-auto"
          ref={chatRef}
        >
          <div className="message-area-self">
            <MessageBubbleSelf
              message={`그 학교 옆에 그 카페 이름 뭐였죠?`}
              time="오전 11:30"
              isRead
            />
            <MessageBubbleSelf
              message={`저번에 갔던 곳 좋은 것 같아요.`}
              time="오전 11:30"
              isRead
            />
          </div>
          <div className="message-area-other">
            <MessageBubbleOther
              message={`오늘 회의 어디서 하나요?`}
              name="원하진"
              time="오전 11:30"
            />
          </div>
          <div className="message-area-self">
            <MessageBubbleSelf
              message={`그 학교 옆에 그 카페 이름 뭐였죠?`}
              time="오전 11:30"
              isRead
            />
            <MessageBubbleSelf
              message={`저번에 갔던 곳 좋은 것 같아요.`}
              time="오전 11:30"
              isRead
            />
          </div>
          <div className="message-area-other">
            <MessageBubbleOther
              message={`오늘 회의 어디서 하나요?`}
              name="원하진"
              time="오전 11:30"
            />
          </div>
          <div className="message-area-self">
            <MessageBubbleSelf
              message={`그 학교 옆에 그 카페 이름 뭐였죠?`}
              time="오전 11:30"
              isRead
            />
            <MessageBubbleSelf
              message={`저번에 갔던 곳 좋은 것 같아요.`}
              time="오전 11:30"
              isRead
            />
          </div>
          <div className="message-area-other">
            <MessageBubbleOther
              message={`오늘 회의 어디서 하나요?`}
              name="원하진"
              time="오전 11:30"
            />
            <MessageBubbleOther
              message={`오늘 회의 어디서 하나요?`}
              name="원하진"
              time="오전 11:30"
            />
          </div>
          <div className="message-area-self">
            <MessageBubbleSelf
              message={`그 학교 옆에 그 카페 이름 뭐였죠?`}
              time="오전 11:30"
              isRead
            />
            <MessageBubbleSelf
              message={`저번에 갔던 곳 좋은 것 같아요.`}
              time="오전 11:30"
              isRead
            />
          </div>
          <div className="message-area-other">
            <MessageBubbleOther
              message={`오늘 회의 어디서 하나요?`}
              name="원하진"
              time="오전 11:30"
            />
          </div>
          <div className="message-area-self">
            <MessageBubbleSelf
              message={`그 학교 옆에 그 카페 이름 뭐였죠?`}
              time="오전 11:30"
              isRead
            />
            <MessageBubbleSelf
              message={`저번에 갔던 곳 좋은 것 같아요.`}
              time="오전 11:30"
              isRead
            />
          </div>
          <div className="message-area-other">
            <MessageBubbleOther
              message={`오늘 회의 어디서 하나요?`}
              name="원하진"
              time="오전 11:30"
            />
          </div>
        </div>
      </div>
      <MessageInput />
    </div>
  );
}

export default Chat;
