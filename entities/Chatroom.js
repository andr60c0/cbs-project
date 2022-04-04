export class Chatroom {
  constructor(title, chatmessages, imageUrl, id) {
    this.title = title;
    this.chatmessages = chatmessages;
    this.imageUrl = imageUrl;
    this.id = id;
  }
}

export class Chatmessage {
  constructor(text, timestamp) {
    this.text = text;
    this.timestamp = timestamp;
  }
}
