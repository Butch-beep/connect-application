import { useContext } from "react";
import Chat from "./Chat";
import { DataContext } from "../../App";
import ChatOnly from "./ChatOnly";

function ChatContainer() {
  const { data } = useContext(DataContext);
  const chats = data?.groups.baseball.channels.lounge.chats;
  let latestUser = "";

  return (
    <div>
      {chats
        ? Object.values(chats).map((chat) => {
            if (latestUser !== chat.name) {
              latestUser = chat.name;
              return <Chat name={chat.name} text={chat.text} key={chat.id} />;
            } else {
              return <ChatOnly text={chat.text} key={chat.id} />;
            }
          })
        : null}
    </div>
  );
}

export default ChatContainer;
