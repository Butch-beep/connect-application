import ChatBox from "./ChatBox";
import ChatHeader from "./ChatHeader";
import ChatsList from "./ChatsList";

function Chats() {
  return (
    <div>
      <ChatHeader />
      <ChatsList />
      <ChatBox />
    </div>
  );
}

export default Chats;
