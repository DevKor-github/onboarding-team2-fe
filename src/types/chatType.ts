export interface selfChatType {
  self: boolean;
  chats: {
    message: string;
    time: string;
    isRead: boolean;
  }[];
}

export interface otherChatType {
  self: boolean;
  chats: {
    name: string;
    message: string;
    time: string;
  }[];
}
