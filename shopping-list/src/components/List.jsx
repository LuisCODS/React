import '../css/list.css';

function List({ item, deleteItem, doneItem }) {
  return (
    <li className="listWrapper">
      <span>{item.quentity}</span>
      <p style={item.packed ? { textDecoration: 'line-through' } : {}}>{item.product}</p>
      <div>
        <button className="doneBtn" onClick={() => doneItem(item.id)}>
          Done
        </button>
        <button className="deleteBtn" onClick={() => deleteItem(item.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}
export default List;
