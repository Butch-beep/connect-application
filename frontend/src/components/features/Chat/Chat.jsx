import AccountIcon from "@mui/icons-material/AccountBox";

function Chat({ text, name, isChatOnly }) {
  if (isChatOnly) {
    return <p>{text}</p>;
  } else {
    return (
      <div>
        <AccountIcon />
        {name}
        {text}
      </div>
    );
  }
}

export default Chat;
