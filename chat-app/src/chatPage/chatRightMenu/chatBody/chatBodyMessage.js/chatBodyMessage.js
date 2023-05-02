function ChatBodyMessage({messageContent, sender,timestamp}) {
 return (
    <>  
    <div className={sender +' messages'}>
          <div className="message">{messageContent}</div>
    </div>

    </>
 );
}
export default ChatBodyMessage;


