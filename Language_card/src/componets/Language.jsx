import { useState } from "react";
import ShowCard from "./ShowCard";
import HideCard from "./HideCard";

function Language({ name, img, options }) {
  const [show, setShow] = useState(true);

  return (
    <div className="cardWrapper" onClick={() => setShow(!show)}>
      {show && ( < ShowCard name={name} img={img} options={options} />)}
      {!show && ( <HideCard options={options} />)}
    </div>
  );
}
export default Language;
