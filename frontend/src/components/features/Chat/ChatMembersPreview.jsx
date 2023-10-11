import { useEffect, useState } from "react";

function ChatMembersPreview() {
  const [members, setMembers] = useState();
  const [length, setLength] = useState();
  const getMembers = async () => {
    try {
      const response = await fetch("http://localhost:5000/member");
      const jsonData = await response.json();

      setMembers(jsonData.slice(0, 3));
      setLength(jsonData.length);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <div className="members-preview-container flex gap-3">
      {members &&
        members.map((member) => {
          return (
            <div className="member-preview" key={members["person_id"]}>
              {member["person_id"]}
            </div>
          );
        })}
      <div className="member-preview-length">{length}</div>
    </div>
  );
}

export default ChatMembersPreview;

//Fix handling if data is loading from fetching
