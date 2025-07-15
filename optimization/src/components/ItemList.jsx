export default function ItemList(itemslist) {
  return (
    <ul>
      {itemslist.map((item, index) => {
        <li key={index}>{item}</li>;
      })}
    </ul>
  );
}
