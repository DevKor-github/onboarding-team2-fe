import { useEffect, useRef } from 'react';
import { socket } from '../utils/socket';
import { useParams } from 'react-router-dom';
import { selfChatData, otherChatData } from '../types/chatData';

/* Components */
import MessageBubbleOther from '../components/MessageBubble/MessageBubbleOther';
import MessageBubbleSelf from '../components/MessageBubble/MessageBubbleSelf';
import MessageInput from '../components/MessageInput/MessageInput';
import Topbar from '../components/Topbar/Topbar';
import Profile from '../components/Profile/Profile';
import Header from '../components/Header/Header';
import { MdMoreHoriz } from 'react-icons/md';

// Dummy
import chatDummy from '../utils/chatDummy.json';

const chats = chatDummy as (selfChatData | otherChatData)[];

function Chat() {
  const chatRef = useRef<HTMLDivElement | null>(null); // 채팅 스크롤
  const { roomId } = useParams<{ roomId: string }>();

  useEffect(() => {
    socket.emit('joinRoom', {
      roomId: { roomId },
      userId: localStorage.getItem('_id')!,
    });

    socket.on('MessageSend', (data) => {
      console.log(data);
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
          {chats.map((messages, index) => (
            <div
              key={index}
              className={
                messages.self ? 'message-area-self' : 'message-area-other'
              }
            >
              {messages.messages.map((message, idx) =>
                messages.self ? (
                  <MessageBubbleSelf
                    key={idx}
                    message={message.message}
                    time={message.time}
                    isRead={(message as selfChatData['messages'][0]).isRead}
                  />
                ) : (
                  <MessageBubbleOther
                    key={idx}
                    message={message.message}
                    name={(message as otherChatData['messages'][0]).name}
                    time={message.time}
                  />
                )
              )}
            </div>
          ))}
        </div>
      </div>
      <MessageInput />
    </div>
  );
}

export default Chat;
