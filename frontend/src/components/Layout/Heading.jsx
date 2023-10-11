import MenuIcon from "@mui/icons-material/Menu";

function Heading({ onClickMore }) {
  return (
    <div className="flex gap-3 border border-red px-3 py-1">
      <button onClick={onClickMore}>
        <MenuIcon />
      </button>
      <p>Connect</p>
    </div>
  );
}

export default Heading;
