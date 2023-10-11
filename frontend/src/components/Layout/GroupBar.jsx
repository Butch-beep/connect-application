import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import { useContext } from "react";
import { SideBarContext } from "./../Home";

function Navbar() {
  const { handleShowSidebar } = useContext(SideBarContext);

  return (
    <div className="flex flex-col items-center w-1/5 gap-5 py-5 h-full bg-gray-800">
      <button
        className="w-full flex justify-center "
        onClick={handleShowSidebar}
      >
        <PersonIcon
          className="text-white bg-blue-800 rounded-md p-1"
          fontSize="large"
        />
      </button>
      <div className="w-full px-3">
        <div className="bg-gray-700 h-1 rounded-md"></div>
      </div>
      <button className="w-full flex justify-center">
        <AddIcon
          className="text-white bg-gray-700 rounded-full p-2"
          fontSize="large"
        />
      </button>
    </div>
  );
}

export default Navbar;
