
import LeftHeaderModal from "./leftHeaderModal/LeftHeaderModal";


function ChatLeftHeader({authenticated}){
    return(
        <div className="card-header">
        <span className="contact-menu-image">
          <img className="profileimg" src={authenticated.picture} alt={authenticated.display} />
        </span>
        <span className="contact-menu-name" id="top-users-head"> {authenticated.display} </span>
        <LeftHeaderModal></LeftHeaderModal>
      </div>
    )
}
export default ChatLeftHeader;
