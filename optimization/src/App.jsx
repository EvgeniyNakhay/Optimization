import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useMemo } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import ItemList from "./components/ItemList";
import CounterButton from "./components/CounterButton";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [listItems, setListItems] = useState([]);
  const [count, setSount] = useState(0);

  const getList = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setListItems(data);
  };

  useEffect(() => {
    getList();
  }, []);

  const handleSearch = useCallback(
    (newSearchTerm) => {
      setSearchQuery(newSearchTerm);
    },
    [searchQuery]
  );

  const increaseCount = useCallback(() => {
    setSount((count) => count + 1);
  }, [count]);

  return (
    <>
      <CounterButton count={count} increaseCount={increaseCount} />
      <SearchInput onSearch={handleSearch} />
      <ItemList listItems={listItems} searchQuery={searchQuery} />
    </>
  );
}

export default App;
