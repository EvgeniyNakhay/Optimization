import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import ItemList from "./components/ItemList";
import CounterButton from "./components/CounterButton";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [itemslist, setItemsList] = useState(null);

  return (
    <>
      <SearchInput inputValue={inputValue} />
      <ItemList itemslist={itemslist} />
      <CounterButton />
    </>
  );
}

export default App;
