function ChatLogoutButton({authSetter, setToken}) {

    const handleLogout = () => {
        authSetter(null)
        setToken(null)
    }

  return (
    <div className="row">
          <div className="col" id="logout-btn">
            <button
              className="btn btn-danger"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
      </div>
  );
}

export default ChatLogoutButton;