import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../App";

function ChatsList() {
  const [chats, setChats] = useState([]);
  const [newMessage, setNewMessage] = useState([]);

  const { socket } = useContext(DataContext);

  const getChats = async () => {
    try {
      const response = await fetch("http://localhost:5000/chat");
      const jsonData = await response.json();

      setChats(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getChats();
  }, []);

  useEffect(() => {
    socket.on("receive_new_message", (data) => {
      setNewMessage([...newMessage, data]);
      console.log(data);
    });

    return () => {
      socket.off("receive_new_message");
    };
  });

  return (
    <div className="chats">
      {chats.map((chat) => (
        <div className="flex flex-row gap-3" key={chat["message_id"]}>
          <p>{chat["first_name"]}:</p>
          <p>{chat["message_body"]}</p>
        </div>
      ))}
      {newMessage &&
        newMessage.map((message) => (
          <div
            className="message flex flex-row gap-3"
            key={message["message_id"]}
          >
            <p>{message["first_name"]}:</p>
            <p>{message["message_body"]}</p>
          </div>
        ))}
    </div>
  );
}

export default ChatsList;

//1. latest: "" name: ronne isSameUser: false, latest: ronne,
//2. latest: ronne, name: ronne, isSameUser: true,
