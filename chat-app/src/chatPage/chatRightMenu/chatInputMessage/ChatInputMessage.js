function ChatInputMessage() {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Type your message..."
      />
      <div>
        <button className="btn btn-primary" type="button">
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatInputMessage;