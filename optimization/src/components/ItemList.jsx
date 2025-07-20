import { useMemo } from "react";

export default function ItemList({ listItems, searchQuery }) {
  const filteredItems = useMemo(() => {
    if (!searchQuery) {
      return listItems;
    }
    return listItems.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [listItems, searchQuery]);
  return (
    <ul>
      {filteredItems.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
}
