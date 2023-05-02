import ChatBodyMessage from "./chatBodyMessage.js/chatBodyMessage";


function ChatBody({ selectedUser, authenticated }) {
  const talkingTo = authenticated.users.find(
    (user) => user.username === selectedUser.username
  );
  const arrayOfMessages = talkingTo.messages;

   arrayOfMessages.sort(function(a, b) {
    return b.timestamp - a.timestamp;
  });
  

  return (
    <div className="chat" id="message-window">
      {arrayOfMessages.map((message) => (
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
