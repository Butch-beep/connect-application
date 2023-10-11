import MicIcon from "@mui/icons-material/Mic";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import Input from "../../Elements/Input";
import SendChatButton from "../../Elements/Button/SendChatButton";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../App";

function ChatBox() {
  const { socket } = useContext(DataContext);
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const postJSON = async (message_body) => {
    await fetch(`http://localhost:5000/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message_body: message_body,
        conversation_id: 1,
        person_id: 1,
      }),
    });
  };

  // sends the message
  const sendChat = (message_body) => {
    socket.emit("send_new_message", {
      message_body: message_body,
      conversation_id: 1,
      person_id: 1,
      first_name: "Butch",
    });
  };

  const handleSendButton = (message_body) => {
    postJSON(message_body);
    sendChat(message_body);
  };

  return (
    <div>
      <button>
        <MicIcon />
      </button>
      <Input value={value} onChange={(e) => handleInput(e)} />
      <button>
        <AttachFileIcon />
      </button>
      <SendChatButton onClick={() => handleSendButton(value)}>
        <SendIcon />
      </SendChatButton>
    </div>
  );
}

export default ChatBox;
