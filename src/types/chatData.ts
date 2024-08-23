export interface selfChatData {
  self: boolean;
  messages: {
    message: string;
    time: string;
    isRead: boolean;
  }[];
}

export interface otherChatData {
  self: boolean;
  messages: {
    name: string;
    message: string;
    time: string;
  }[];
}
