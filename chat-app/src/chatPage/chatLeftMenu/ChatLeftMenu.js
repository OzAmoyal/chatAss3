import ChatListUser from './chatListUser/ChatListUser';
import ChatLeftHeader from './chatLeftHeader/ChatLeftHeader'


function ChatLeftMenu(props){
    


    return  (
    <div className="col col-4" id="contact-menu">
    <div className="card">
      <ChatLeftHeader authenticated={props.authenticated} setAuthenticated={props.setAuthenticated} registered={props.registered}></ChatLeftHeader>
      <div className="card-body">
        <ul className="list-group">
          {props.authenticated.users.sort(function(a, b) {
            if (a.messages.length === 0) {
              return 1;
            } else if (b.messages.length === 0) {
              return -1;
            } else {
              const aLatestMessage = a.messages[a.messages.length - 1];
              const bLatestMessage = b.messages[b.messages.length - 1];
              return bLatestMessage.timestamp - aLatestMessage.timestamp;
            }}).map(user => (
            <ChatListUser user={user} key={user.username} authenticated={props.authenticated} setSelectedUser={props.setSelectedUser} registered={props.registered} />
          ))}
        </ul>

      </div>
    </div>
  </div>);
}

export default ChatLeftMenu;