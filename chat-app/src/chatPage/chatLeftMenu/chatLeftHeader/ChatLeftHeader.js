import '../../../fonts.css'

import LeftHeaderModal from "./leftHeaderModal/LeftHeaderModal";


function ChatLeftHeader({authenticated, setAuthenticated , registered}){

    

    return(
        <div className="card-header">
        <span className="contact-menu-image">
          <img className="profileimg" src={authenticated.picture} alt={authenticated.display} />
        </span>
        <span className="SFProB" id="top-users-head"> {authenticated.display} </span>
        <LeftHeaderModal setAuthenticated={setAuthenticated} authenticated={authenticated} registered={registered}></LeftHeaderModal>
      </div>
    )
}
export default ChatLeftHeader;
