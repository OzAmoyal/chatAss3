
import React, { useState } from "react";
import './ChatListUser.css'
import DateTimeComponent from "./DateTime";
function ChatListUser({user,chatid, lastMessage, setSelectedUser }) {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  let latestTimestamp = "";
  let lastMessageContent = ""
  if (lastMessage) {
    latestTimestamp = new Date(lastMessage.created).toLocaleString();
    lastMessageContent = lastMessage.content;
  }
  const handleClick = () => {

    setSelectedUser(chatid);
    }
    
  return (
    <li className={`list-group-item ${hovered ? 'chosen' : ''}`}  onClick={handleClick}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="contact-menu-li">
        <span className="contact-menu-image">
          <img className="profileimg" src={user.profilePic} alt={user.displayName} />
        </span>
        <span className="contact-menu-name"> {user.displayName} </span>
       <DateTimeComponent serverDateTime={latestTimestamp}></DateTimeComponent>
        <div className="contact-menu-last-message">{lastMessageContent}</div>
      </div>
    </li>
  );
}
export default ChatListUser;