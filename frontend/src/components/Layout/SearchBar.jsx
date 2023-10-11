import { useState } from "react";

function SearchBar() {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return <input value={value} onChange={(e) => handleInput(e)}></input>;
}

export default SearchBar;
