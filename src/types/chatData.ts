export interface selfChatData {
  self: boolean;
  chats: {
    message: string;
    time: string;
    isRead: boolean;
  }[];
}

export interface otherChatData {
  self: boolean;
  chats: {
    name: string;
    message: string;
    time: string;
  }[];
}
