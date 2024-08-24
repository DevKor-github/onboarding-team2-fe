import { useMutation } from '@tanstack/react-query';
import { apiInterface } from '../../utils/customAxios';
import { getChatsRequest, getChatsResponse } from '../types/chats';
import { otherChatType, selfChatType } from '../../types/chatType';
import { formatDate } from '../../utils/timeFormat';

const getChats = async ({ limit, offset, roomId }: getChatsRequest) => {
  const response = await apiInterface.get<getChatsResponse[]>(
    `/chat/room/get/${roomId}&${limit}?offset=${offset}`,
    {
      headers: {
        Authorization: localStorage.getItem('accessToken'),
      },
    }
  );

  return response;
};

export const useGetChats = () => {
  return useMutation({
    mutationFn: async (requestParams: getChatsRequest) => {
      const data = await getChats(requestParams);
      return processChats(data.data);
    },
    onSuccess: (_) => console.log(''),
  });
};

const processChats = (chats: getChatsResponse[]) => {
  const processedChats: (selfChatType | otherChatType)[] = [];
  let prev: boolean | null = null;
  let group: selfChatType | otherChatType | null = null;

  chats.forEach((chat, _) => {
    const self = chat.senderId == localStorage.getItem('_id');

    if (prev != self && group != null) {
      processedChats.push(group!);
      prev = null;
      group = null;
    }

    if (prev == null) {
      prev = self;
      group = {
        self,
        chats: [],
      };
    }

    if (prev == self) {
      if (self) {
        const temp = {
          message: chat.message,
          time: formatDate(chat.createdAt),
          isRead: true,
        };

        (group as selfChatType).chats.push(temp);
      } else {
        const temp = {
          name: chat.senderName,
          message: chat.message,
          time: formatDate(chat.createdAt),
        };

        (group as otherChatType).chats.push(temp);
      }
    }
  });
  return processedChats;
};
