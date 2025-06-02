import { useState } from "react";

function Form({ addItem }) {
  const [product, setProduct] = useState("");
  const [quentity, setQuentity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if(product.trim()) {
      const newItem = { id:Date.now(), product, quentity, packed: false };
      addItem(newItem);
      cleanUp();
    }
  };

  function cleanUp(){
    setProduct("");
    setQuentity(1);
  };

  return (
    <form className="form" onSubmit={ handleSubmit }>
      <select value={ quentity } className="select" onChange={ (e) => setQuentity(Number(e.target.value)) }>
        { 
          [...Array(10) ].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          )) 
        }
      </select>
      <input className="input" type="text" placeholder="Enter a name"  value={product} onChange={ (e) => setProduct(e.target.value) } />
      <button className="addBtn">Add</button>
    </form>
  );
}

export default Form;