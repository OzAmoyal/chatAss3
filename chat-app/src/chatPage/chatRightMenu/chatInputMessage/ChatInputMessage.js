function ChatInputMessage() {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Type your message..."
        aria-label="Recipient's username" aria-describedby="button-addon2"></input>
    
      <div>
        <button className="btn btn-primary" type="submit" id="button-addon2">
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatInputMessage;