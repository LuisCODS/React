import './index.css';
import { useState } from "react";

const messages = ["Hello React", "React is a Framework", "React Best"];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function onBtlPreviousClicked(){
    if (step > 1) setStep(step - 1);
  }

  function onBtlNextClicked(){
    if (step < 3) setStep(step + 1);
  }

  return (
    <div>
      <button onClick={ () => setIsOpen(!isOpen) }>
        {isOpen ? "Hide" : "Show"}
      </button>

      {  isOpen && ( <div className="wrapper">
                        <div className="numberWrapper">
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={step >= 2 ? "active" : ""}>2</div>
                        <div className={step >= 3 ? "active" : ""}>3</div>
                    </div>
                    <p>{step}:{messages[step - 1]}</p>
                    <div className="btnGroup">
                      <button onClick={onBtlPreviousClicked}>Previous</button>
                      <button onClick={onBtlNextClicked}>Next</button>
                    </div>
                  </div>)}
    </div>
  );
}

export default App;