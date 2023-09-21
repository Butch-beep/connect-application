import SearchBar from "./SearchBar";

function ChannelSideBar() {
  return (
    <div className="bg-gray-600 w-4/5">
      <SearchBar />
      <div>
        <button>All Updates</button>
        <button>Members</button>
        <button>Setting</button>
      </div>
    </div>
  );
}

export default ChannelSideBar;
