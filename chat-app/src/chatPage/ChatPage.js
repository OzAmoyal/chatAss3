import "./ChatPage.css"
import ChatLogoutButton from "./chatLogoutButton/ChatLogoutButton";
import ChatLeftMenu from "./chatLeftMenu/ChatLeftMenu"
import ChatRightMenu from "./chatRightMenu/ChatRightMenu";
import { useEffect, useState } from "react";


function ChatPage(props){
 const [selectedUser, setSelectedUser] = useState(null);
const [change,setChange]=useState(false);
const [update,setUpdate]=useState(false);
const [notifications,setNotifications]=useState([{}]);
props.socket.on('identify', (data) => {
props.socket.emit('token', "bearer "+props.token);
});
props.socket.on('update', (data) => {
  //data=JSON.parse(data)
  setChange(true)
 
  if(selectedUser===data.chatID){
    setUpdate(true)
    
  }else{
    const updatedNotifications ={...notifications}
    if(updatedNotifications[data.chatID]){
      updatedNotifications[data.chatID]++
    }else{
      updatedNotifications[data.chatID]=1
    }
    setNotifications(updatedNotifications);
  }
  
});
useEffect(() => {
  if (selectedUser && notifications && notifications[selectedUser]) {
    const updatedNotifications = { ...notifications };
    updatedNotifications[selectedUser] = 0;
    setNotifications(updatedNotifications);
  }
}, [selectedUser, notifications, setNotifications]);

    return (
        <>
        <div className="row justify-content-center">
          <div className="row">
            <div className="col col-2">
        <ChatLogoutButton authSetter={props.setAuthenticated} socket={props.socket} token={props.token} setToken={props.setToken} ></ChatLogoutButton>
        </div>

        <div className="col col-10"></div></div>

      
      <ChatLeftMenu notifications={notifications} setNotifications={setNotifications} setSelectedUser={setSelectedUser} setChange={setChange} change={change} token={props.token} authenticated={props.authenticated}></ChatLeftMenu>

       <ChatRightMenu selectedUser={selectedUser} setChange={setChange} update={update} setUpdate={setUpdate} token={props.token}authenticated={props.authenticated} socket={props.socket}></ChatRightMenu>
      </div>
        </>
    );
}
export default ChatPage;
