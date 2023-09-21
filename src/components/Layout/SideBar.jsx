import GroupBar from "./GroupBar";
import ChannelSideBar from "./ChannelSideBar";

function SideBar({ showSidebar }) {
  function SidebarElements() {
    return (
      <div className="flex w-full h-full fixed top-0 bg-white text-black">
        <GroupBar />
        <ChannelSideBar />
        <div></div>
      </div>
    );
  }

  return <>{showSidebar ? <SidebarElements /> : null}</>;
}

export default SideBar;
