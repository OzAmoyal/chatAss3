import ronaldo from "../../images/ronaldo.jpg";
import messi from "../../images/messi.jpg";
import ChatListUser from './chatListUser/ChatListUser';
import ChatLeftHeader from './chatLeftHeader/ChatLeftHeader'


function ChatLeftMenu(props){


    return  (
    <div className="col col-4" id="contact-menu">
    <div className="card">
      <ChatLeftHeader></ChatLeftHeader>
      <div className="card-body">
        <ul className="list-group">
          {props.authenticated.users.map(user => (
            <ChatListUser user={user} key={user.username} authenticated={props.authenticated} setSelectedUser={props.setSelectedUser} registered={props.registered} />
          ))}
        </ul>

      </div>
    </div>
  </div>);
}

export default ChatLeftMenu;