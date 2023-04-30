
import ronaldo from "../../../images/ronaldo.jpg";

function ChatCurrentChatHeader({selectedUser}){
    return(

        <div className="card-header">
              <img className="profileimg" src={selectedUser.picture} alt={selectedUser.display} />
              <span className="pad">{selectedUser.username}</span>
            </div>
    )
}
export default ChatCurrentChatHeader;