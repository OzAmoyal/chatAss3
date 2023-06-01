import './ChatBody.css';
import ChatBodyMessage from './chatBodyMessage.js/chatBodyMessage';

function ChatBody({ chatMessages, authenticated }) {
  const messages = chatMessages.messages || []; 


messages.sort((a, b) => new Date(b.created) - new Date(a.created));
  return (
    <div className="chat" id="message-window">
      {messages.map((message) => (
        <ChatBodyMessage
          key={message.id}
          messageContent={message.content}
          sender={authenticated.username === message.sender.username ? 'mine' : 'yours'}
        />
      ))}
    </div>
  );
}

export default ChatBody;
