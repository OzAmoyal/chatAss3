
function ChatListUser({user, registered, setSelectedUser}) {
    const latestTimestamp = user.messages[user.messages.length - 1].timestamp;
    const lastMessage = user.messages[user.messages.length - 1].content;
    
    const matchedUser = registered.find((registeredUser) => registeredUser.username === user.username);
    const handleClick = () => {
        const matchedUserList = registered.find((registeredUser) => registeredUser.username === user.username);
        console.log(matchedUserList);
        setSelectedUser(matchedUserList);
    }
  return (
    <li className="list-group-item" onClick={handleClick} >
      <div className="contact-menu-li">
        <span className="contact-menu-image">
          <img className="profileimg" src={matchedUser.picture} alt={user.display} />
        </span>
        <span className="contact-menu-name"> {matchedUser.display} </span>
        <span className="contact-menu-date"> {latestTimestamp} </span>
        <div className="contact-menu-last-message">{lastMessage}</div>
      </div>
    </li>
  );
}
export default ChatListUser;