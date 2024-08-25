import { useMutation } from '@tanstack/react-query';
import { apiInterface } from '../../utils/customAxios';
import {
  createNewChatRequest,
  getChatRoomsRequest,
  getChatRoomsResponse,
} from '../types/chatrooms';

const getChatRooms = async ({ limit, offset }: getChatRoomsRequest) => {
  const response = await apiInterface.get<getChatRoomsResponse[]>(
    `/chat/room/total-chat/${offset}&${limit}`,
    {
      headers: {
        Authorization: localStorage.getItem('accessToken'),
      },
    }
  );

  return response;
};

export const useGetChatRooms = () => {
  return useMutation({
    mutationFn: getChatRooms,
    onSuccess: () => {
      console.log('/chat/room/total-chat success');
    },
  });
};

const createNewChat = async ({ name, tags }: createNewChatRequest) => {
  const response = await apiInterface.post(
    `/chat/create-chat`,
    {
      creator: localStorage.getItem('_id'),
      isGroup: false,
      name,
      tags,
    },
    {
      headers: {
        Authorization: localStorage.getItem('accessToken'),
      },
    }
  );

  return response.data;
};

export const useCreateNewChat = () => {
  return useMutation({
    mutationFn: createNewChat,
    onSuccess: (_) => console.log('Created new chatroom'),
  });
};
