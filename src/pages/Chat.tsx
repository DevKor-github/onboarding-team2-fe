import { useEffect, useRef, useState } from 'react';
import { socket } from '../utils/socket';
import { useLocation, useParams } from 'react-router-dom';
import { selfChatType, otherChatType } from '../types/chatType';
import { formatDate, getCurTime } from '../utils/timeFormat';
import { useGetChats } from '../api/hooks/chats';

/* Components */
import MessageBubbleOther from '../components/MessageBubble/MessageBubbleOther';
import MessageBubbleSelf from '../components/MessageBubble/MessageBubbleSelf';
import MessageInput from '../components/MessageInput/MessageInput';
import Topbar from '../components/Topbar/Topbar';
import Profile from '../components/Profile/Profile';
import Header from '../components/Header/Header';
import { MdMoreHoriz } from 'react-icons/md';

function Chat() {
  // 채팅방 이름 상태 받아오기
  const location = useLocation();
  const { name } = location.state || {};

  // 채팅 내역 받아오기 api
  const { mutate: mutateGetChats } = useGetChats();

  const chatRef = useRef<HTMLDivElement | null>(null); // 채팅 스크롤
  const { roomId } = useParams<{ roomId: string }>(); // 현재 채팅방 roomId 가져오기

  const [chats, setChats] = useState<(selfChatType | otherChatType)[]>();

  useEffect(() => {
    mutateGetChats(
      {
        limit: 100,
        offset: 1,
        roomId: roomId!,
      },
      {
        onSuccess: (data) => setChats(data),
      }
    );
  }, [mutateGetChats]);

  // socket
  useEffect(() => {
    socket.emit('joinRoom', {
      roomId,
      userId: localStorage.getItem('_id')!,
    });

    socket.on('MessageSend', (data) => {
      if (data.senderId != localStorage.getItem('_id')) {
        const chat = {
          name: data.senderName,
          message: data.message,
          time: formatDate(data.createdAt),
        };

        // 상대가 보낸 메시지 리스트에 추가
        setChats((prevChats) => {
          if (prevChats) {
            const lastChat = prevChats[0];

            if (lastChat && !lastChat.self) {
              // 최신 메시지가 상대가 보낸 메시지일 때
              const updatedChats = [...prevChats];
              const updatedFirstChat = {
                ...lastChat,
                chats: [chat, ...lastChat.chats],
              };
              updatedChats[0] = updatedFirstChat as otherChatType;
              return updatedChats;
            } else {
              // 최신 메시지가 상대방이 보낸 메시지일 때
              const newChat: otherChatType = {
                self: false,
                chats: [chat],
              };
              return [newChat, ...prevChats];
            }
          }
        });
      }
    });
  }, [socket]);

  const sendMessage = (message: string) => {
    const chat = { message, time: formatDate(getCurTime()), isRead: false };

    socket.emit('sendMessage', {
      roomId: roomId,
      message: message,
    });

    // 내가 보낸 메시지 리스트에 추가
    setChats((prevChats) => {
      if (prevChats) {
        const lastChat = prevChats[0];

        if (lastChat && lastChat.self) {
          // 최신 메시지가 사용자가 보낸 메시지일 때
          const updatedChats = [...prevChats];
          const updatedFirstChat = {
            ...lastChat,
            chats: [chat, ...lastChat.chats],
          };
          updatedChats[0] = updatedFirstChat as selfChatType;
          return updatedChats;
        } else {
          // 최신 메시지가 상대방이 보낸 메시지일 때
          const newChat: selfChatType = {
            self: true,
            chats: [chat],
          };
          return [newChat, ...prevChats];
        }
      }
    });
  };

  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <Header start={<Profile name={name} />} end={<MdMoreHoriz size={16} />} />
      <div className="flex-1 overflow-hidden message-container">
        <div
          className="flex flex-col-reverse h-full overflow-y-auto"
          ref={chatRef}
        >
          {chats &&
            chats.map((messages, index) => (
              <div
                key={index}
                className={
                  messages.self ? 'message-area-self' : 'message-area-other'
                }
              >
                {messages.chats.map((message, idx) =>
                  messages.self ? (
                    <MessageBubbleSelf
                      key={idx}
                      message={message.message}
                      time={message.time}
                      isRead={(message as selfChatType['chats'][0]).isRead}
                    />
                  ) : (
                    <MessageBubbleOther
                      key={idx}
                      message={message.message}
                      name={(message as otherChatType['chats'][0]).name}
                      time={message.time}
                    />
                  )
                )}
              </div>
            ))}
        </div>
      </div>
      <MessageInput onSendMessage={sendMessage} />
    </div>
  );
}

export default Chat;
