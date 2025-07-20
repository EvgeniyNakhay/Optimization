export default function CounterButton({ count, increaseCount }) {
  const handleClick = () => {
    increaseCount();
  };
  return <button onClick={handleClick}>{count}</button>;
}
