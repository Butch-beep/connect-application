import { createContext, useEffect, useState } from "react";
import "./App.css";
import Heading from "./components/Layout/Heading";
import SideBar from "./components/Layout/SideBar";
import Chats from "./components/features/Chat/Chats";

export const AppContext = createContext({
  handleShowSidebar: () => {},
});

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const url = "./db.json";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  function handleShowSidebar() {
    setShowSidebar(!showSidebar);
  }
  return (
    <AppContext.Provider value={{ handleShowSidebar, data }}>
      <div className="w-screen h-screen">
        <Heading onClickMore={handleShowSidebar} />
        <SideBar showSidebar={showSidebar} />
        <Chats />
      </div>
    </AppContext.Provider>
  );
}

export default App;
