import "./ChatCurrentChatHeader.css"
function ChatCurrentChatHeader({selectedUser}){
    return(

        <div className="card-header">
              <img className="profileimg" src={selectedUser.picture} alt={selectedUser.display} />
              <span className="pad header-user-name">{selectedUser.display}</span>
            </div>
    )
}
export default ChatCurrentChatHeader;