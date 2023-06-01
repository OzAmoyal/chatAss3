function ChatBodyMessage({messageContent, sender}) {
 return (
    <>  
    <div className={sender +' messages'}>
          <div className="message">{messageContent}</div>
    </div>

    </>
 );
}
export default ChatBodyMessage;


