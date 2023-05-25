import ChatListUser from "./chatListUser/ChatListUser";
import ChatLeftHeader from "./chatLeftHeader/ChatLeftHeader";
import { useState, useEffect } from "react";

async function fetchChats(token) {
  try {
    const response = await fetch("http://localhost:50000/api/Chats", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    
    if (response.ok) {
      return await response.json();
    } else {
      console.error("Error fetching chats: " + response.status);
      console.error("hi");
      throw new Error("Error fetching chats");
    }
  } catch (error) {
    console.error(error);
    console.error("hi2");
    throw new Error("Error fetching chats: " + error.message);
  }
}

function ChatLeftMenu(props) {
  const [chats, setChats] = useState([]);
  const setChange=props.setChange
  useEffect(() => { 
    const fetchData = async () => {
      try {
        const fetchedChats = await fetchChats(props.token);
        setChats(fetchedChats);
        setChange(false)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [props.change, props.token,setChange]);

  return (
    <div className="col col-4" id="contact-menu">
      <div className="card">
        <ChatLeftHeader
          authenticated={props.authenticated}
          chats={chats}
          setChats={setChats}
          token={props.token}
        ></ChatLeftHeader>
        <div className="card-body">
          <ul className="list-group">
            {chats
              .sort((a, b) => {
                // Handle the case where "lastMessage" is null
                if (a.lastMessage === null){
                  return -1; // Place a before b
                }
                if (b.lastMessage === null) {
                  return 1; // Place b before a
                }

                // Compare the "created" field in "lastMessage" objects
                const dateA = a.lastMessage.created;
                const dateB = b.lastMessage.created;

                return new Date(dateB) - new Date(dateA);
              })
              .map((chat) => (
                <ChatListUser
                  user={chat.user}
                  key={chat.id}
                  chatid={chat.id}
                  lastMessage={chat.lastMessage}
                  setSelectedUser={props.setSelectedUser}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ChatLeftMenu;
