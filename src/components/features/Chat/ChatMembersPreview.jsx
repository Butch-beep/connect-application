import { useContext } from "react";
import { AppContext } from "../../../App";

function ChatMembersPreview() {
  const { data } = useContext(AppContext);
  const members = data?.groups.baseball.members;
  const firstThree = members?.slice(0, 3);
  const remainingNumber = members?.length - 3;

  return (
    <>
      {firstThree?.map((member) => {
        return <div key={member}>{member}</div>;
      })}
      <div>{remainingNumber}</div>
    </>
  );
}

export default ChatMembersPreview;
