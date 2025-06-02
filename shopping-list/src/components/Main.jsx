import List from './List';
import '../css/main.css';
import Form from './Form';
import { useState } from 'react';

function Main({ items, addItem, deleteItem, doneItem }) {
  const [sortBy, setSortBy] = useState('input');
  let sortedItems;

  if(sortBy === "input"){
    sortedItems = items;
  }

  if(sortBy === "packed"){
    sortedItems = items;
    sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div>
      <Form addItem={addItem} />
      <ul className="mainWrapper">
        {sortedItems.map((item) => (
          <List item={item} key={item.id} deleteItem={deleteItem} doneItem={doneItem} />
        ))}
      </ul>

      <div>
        <select className="select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="packed">Sort by Packed</option>
        </select>
      </div>

    </div>
  );
}

export default Main;
