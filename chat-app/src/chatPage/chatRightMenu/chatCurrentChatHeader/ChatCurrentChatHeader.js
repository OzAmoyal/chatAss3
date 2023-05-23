import "./ChatCurrentChatHeader.css"
function ChatCurrentChatHeader({userDetails}){

    return(
        
        <div className="card-header">
              <img className="profileimg" src={userDetails.profilePic} alt={userDetails.displayName} />
              <span className="pad header-user-name">{userDetails.displayName}</span>
            </div>
          
    )
}
export default ChatCurrentChatHeader;