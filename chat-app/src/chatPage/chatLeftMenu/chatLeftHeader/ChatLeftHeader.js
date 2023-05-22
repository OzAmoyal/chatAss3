
import LeftHeaderModal from "./leftHeaderModal/LeftHeaderModal";


function ChatLeftHeader({authenticated, chats, setChats, token}){

    

    return(
        <div className="card-header">
        <span className="contact-menu-image">
          <img className="profileimg" src={authenticated.profilePic} alt={authenticated.displayName} />
        </span>
        <span id="top-users-head"> {authenticated.displayName} </span>
        <LeftHeaderModal authenticated={authenticated} chats={chats} setChats={setChats} token={token} ></LeftHeaderModal>
      </div>
    )
}
export default ChatLeftHeader;
