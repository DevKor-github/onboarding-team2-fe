export interface getChatRoomsRequest {
  limit: number;
  offset: number;
}

export interface getChatRoomsResponse {
  roomId: string;
  name: string;
  tags: string[];
  size: number;
  lastMsgSent: string;
}
