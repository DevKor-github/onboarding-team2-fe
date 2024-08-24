export interface getChatsRequest {
  limit: number;
  offset: number;
  roomId: string;
}

export interface getChatsResponse {
  _id: string;
  roomId: string;
  senderId: string;
  senderName: string;
  message: string;
  createdAt: string;
}
