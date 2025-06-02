export default function HideCard({ options }) {
  return (
    <ul>
      {options.map((item, index) => (
        <li key={index}>{item} </li>
      ))}
    </ul>
  );
}
