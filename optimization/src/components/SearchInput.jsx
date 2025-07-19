import { useState } from "react";

export default function SearchInput({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(e) {
    const newSearchTerm = e.target.value;
    setInputValue(newSearchTerm);
    onSearch(newSearchTerm);
  }
  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => handleInputChange(e)}
    />
  );
}
