import ChatCurrentChatHeader from "./chatCurrentChatHeader/ChatCurrentChatHeader";
import ChatInputMessage from "./chatInputMessage/ChatInputMessage";
import ChatBody from "./chatBody/ChatBody";


function ChatRightMenu({selectedUser, setAuthenticated,authenticated}){


if(selectedUser===null){
  return(
  <div className="col col-8" id="message-window">
    <h1> press a user to start chatting</h1>
    </div>);
  }

const handleSendMessage = (event) => {
  event.preventDefault();
  const time = new Date();
  const message = event.target[0].value;
  const newMessage = {
    content: message,
    sender: authenticated.username,
    receiver: selectedUser.username,
    timestamp: time
  };
  
  const updatedAuthenticated = { ...authenticated };
  const otherUserIndex = updatedAuthenticated.users.findIndex(
    (user) => user.username === selectedUser.username
  );
  const thisUserIndex = selectedUser.users.findIndex(
    (user) => user.username === authenticated.username
  );
  
  updatedAuthenticated.users[otherUserIndex].messages.push(newMessage);
  selectedUser.users[thisUserIndex].messages.push(newMessage);
  
  setAuthenticated(updatedAuthenticated);
  
  event.target[0].value = "";
};

return (
<div className="col col-8" >
          <div className="card">
          <ChatCurrentChatHeader selectedUser={selectedUser}></ChatCurrentChatHeader>
          <ChatBody selectedUser={selectedUser} authenticated={authenticated}></ChatBody>
          </div>
          <form onSubmit={handleSendMessage}>

        <ChatInputMessage ></ChatInputMessage>
        </form>
        </div>
        );
}
export default ChatRightMenu;