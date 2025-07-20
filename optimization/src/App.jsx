import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useMemo } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import ItemList from "./components/ItemList";
import CounterButton from "./components/CounterButton";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [itemslist, setItemsList] = useState(null);

  const listItems = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      userId: 1,
      id: 6,
      title: "laboriosam13",
      completed: false,
    },
  ];

  const handleSearch = useCallback((newSearchTerm) => {
    setSearchQuery(newSearchTerm);
    console.log("отработал handleSearch");
  }, []);

  return (
    <>
      <CounterButton />
      <SearchInput onSearch={handleSearch} />
      <ItemList listItems={listItems} searchQuery={searchQuery} />
    </>
  );
}

export default App;
