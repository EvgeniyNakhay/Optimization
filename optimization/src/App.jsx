import React, { Fragment, useEffect, useState } from "react";
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
  ];

  function handleSearch(newSearchTerm) {
    setSearchQuery(newSearchTerm);
  }

  return (
    <>
      <CounterButton />
      <SearchInput onSearch={handleSearch} />
      <ItemList array={listItems} />
    </>
  );
}

export default App;
