import Heading from "./Layout/Heading";
import SideBar from "./Layout/SideBar";
import Chats from "./features/Chat/Chats";
import { createContext, useState } from "react";
import Test from "./features/Chat/Test";

export const SideBarContext = createContext({
  handleShowSidebar: () => {},
});

function Home() {
  const [showSidebar, setShowSidebar] = useState(false);

  function handleShowSidebar() {
    setShowSidebar(!showSidebar);
  }
  return (
    <div className="w-screen h-screen">
      <Heading onClickMore={handleShowSidebar} />
      <SideBar showSidebar={showSidebar} />
      <Chats />
      {/* <Test /> */}
    </div>
  );
}

export default Home;
