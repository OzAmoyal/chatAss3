import ChatCurrentChatHeader from "./chatCurrentChatHeader/ChatCurrentChatHeader";
import ChatInputMessage from "./chatInputMessage/ChatInputMessage";
import ChatBody from "./chatBody/ChatBody";

function ChatRightMenu(props){
if(props.selectedUser===null){
  return(
  <div className="col col-8" id="message-window">
    <h1> press a user to start chatting</h1>
    </div>);
}
  
return (
<div className="col col-8" >
          <div className="card">
          <ChatCurrentChatHeader selectedUser={props.selectedUser}></ChatCurrentChatHeader>
          <ChatBody selectedUser={props.selectedUser} authenticated={props.authenticated}></ChatBody>
          </div>
        <ChatInputMessage></ChatInputMessage>
        </div>);
}
export default ChatRightMenu;