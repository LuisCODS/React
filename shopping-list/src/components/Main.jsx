import List from "./List";
import "../css/main.css";
import Form from "./Form";

function Main({ items, addItem, deleteItem, doneItem }) {
  return (
    <div>
      <Form addItem={ addItem } />
      <ul className="mainWrapper">
        { 
          items.map((item) => (
              <List  item={ item } key={ item.id } deleteItem={ deleteItem } doneItem={ doneItem } />
          )) 
        }
      </ul>
    </div>
  );
};

export default Main;