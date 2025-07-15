import { useState } from "react";

export default function SearchInput({ inputValue }) {
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  return <input type="text" value={inputValue} onChange={handleInputChange} />;
}
