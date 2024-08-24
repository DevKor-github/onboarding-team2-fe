import { useMutation } from '@tanstack/react-query';
import { apiInterface } from '../../utils/customAxios';
import { getChatRoomsRequest, getChatRoomsResponse } from '../types/chatrooms';

const getChatRooms = async ({ limit, offset }: getChatRoomsRequest) => {
  const response = await apiInterface.get<getChatRoomsResponse[]>(
    `/chat/room/total-chat?limit=${limit}&offset=${offset}`,
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
