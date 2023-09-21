import MicIcon from "@mui/icons-material/Mic";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";

function ChatBox() {
  return (
    <div>
      <button>
        <MicIcon />
      </button>
      <input />
      <button>
        <AttachFileIcon />
      </button>
      <button>
        <SendIcon />
      </button>
    </div>
  );
}

export default ChatBox;
