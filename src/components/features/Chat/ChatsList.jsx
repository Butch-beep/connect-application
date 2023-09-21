import { useContext } from "react";
import Chat from "./Chat";
import { AppContext } from "../../../App";

function ChatsList() {
  const { data } = useContext(AppContext);
  const chats = data?.groups.baseball.channels.lounge.chats;
  let latestUser = "";

  return (
    <>
      {chats
        ? Object.values(chats).map((chat) => {
            if (latestUser !== chat.name) {
              latestUser = chat.name;
              return (
                <Chat
                  isChatOnly={false}
                  name={chat.name}
                  text={chat.text}
                  key={chat.id}
                />
              );
            } else {
              return <Chat isChatOnly={true} text={chat.text} key={chat.id} />;
            }
          })
        : null}
    </>
  );
}

export default ChatsList;

//1. latest: "" name: ronne isSameUser: false, latest: ronne,
//2. latest: ronne, name: ronne, isSameUser: true,
