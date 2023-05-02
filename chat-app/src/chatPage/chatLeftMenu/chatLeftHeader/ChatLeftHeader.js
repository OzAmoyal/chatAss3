import nymar from "../../../images/nymar.jpg";
import LeftHeaderModal from "./leftHeaderModal/LeftHeaderModal";
function ChatLeftHeader(){
    return(
        <div className="card-header">
        <span className="contact-menu-image">
          <img className="profileimg" src={nymar} alt="nymar" />
        </span>
        <span className="contact-menu-name" id="top-users-head"> Users </span>
        <LeftHeaderModal></LeftHeaderModal>
      </div>
    )
}
export default ChatLeftHeader;


