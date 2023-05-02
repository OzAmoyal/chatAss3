import ChatBodyMessage from "./chatBodyMessage.js/chatBodyMessage";
import { useState} from "react";

function ChatBody({ selectedUser, authenticated }) {
  const talkingTo = authenticated.users.find(
    (user) => user.username === selectedUser.username
  );
  const arrayOfMessages = talkingTo.messages;
  const [messages, setMessages] = useState(arrayOfMessages);

  messages.sort((a, b) => b.timestamp.localeCompare(a.timestamp));

  

  return (
    <div className="chat" id="message-window">
      {messages.map((message) => (
        <ChatBodyMessage
          key={message.timestamp}
          messageContent={message.content}
          sender={authenticated.username === message.sender ? "mine" : "yours"}
          timestamp={message.timestamp}
        />
      ))}
    </div>
  );
}

export default ChatBody;
