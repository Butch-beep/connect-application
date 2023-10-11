import ChatMembersPreview from "./ChatMembersPreview";

function ChatHeader() {
  return (
    <div>
      <div>
        <p>Mobile Legends Group</p>
        <p>Where we talk about the game.</p>
      </div>
      <div>
        <ChatMembersPreview />
      </div>
    </div>
  );
}

export default ChatHeader;
