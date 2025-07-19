export default function ItemList({ array }) {
  return (
    <ul>
      {array.map((item) => {
        return (
          <div key={item.id}>
            <li>{item.title}</li>
          </div>
        );
      })}
    </ul>
  );
}
