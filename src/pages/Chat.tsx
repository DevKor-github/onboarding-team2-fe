import { useEffect, useRef } from 'react';
import { socket } from '../utils/socket';
import { useParams } from 'react-router-dom';

/* Components */
import MessageBubbleOther from '../components/MessageBubble/MessageBubbleOther';
import MessageBubbleSelf from '../components/MessageBubble/MessageBubbleSelf';
import MessageInput from '../components/MessageInput/MessageInput';
import Topbar from '../components/Topbar/Topbar';
import Profile from '../components/Profile/Profile';
import Header from '../components/Header/Header';
import { MdMoreHoriz } from 'react-icons/md';

function Chat() {
  const chatRef = useRef<HTMLDivElement | null>(null); // 채팅 스크롤
  const { roomId } = useParams<{ roomId: string }>();

  useEffect(() => {
    socket.emit('joinRoom', {
      roomId: { roomId },
      userId: localStorage.getItem('_id')!,
    });

    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <Header
        start={<Profile name="원하진" />}
        end={<MdMoreHoriz size={16} />}
      />
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
