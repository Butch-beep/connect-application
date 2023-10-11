import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../App";

function Test() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [room, setRoom] = useState("");
  const [username, setUsername] = useState("");

  const { socket } = useContext(DataContext);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
      };

      await socket.emit("send_message", messageData);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
    });

    return () => {
      socket.off("receive_message");
    };
  });

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join-room", room);
    }
  };

  return (
    <div>
      <div>
        Room
        <input
          type="text"
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        ></input>
      </div>
      <div>
        Username
        <input
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        ></input>
      </div>
      <button onClick={joinRoom}>Join a Room</button>
      <div>LiveChat</div>
      <input
        type="text"
        placeholder="Your chat here..."
        onChange={(event) => {
          setCurrentMessage(event.target.value);
        }}
      ></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Test;
