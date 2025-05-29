import './index.css';

const messages = ["Hello React", "React is a Framework", "React Best"];

function App() {
  const step = 1;


  return (
    <div className="wrapper">
      <div className="numberWrapper">
      <div className={`${step >= 1 ? "active" : ""}`}>1</div>
      <div className={`${step >= 2 ? "active" : ""}`}>2</div>
      <div className={`${step >= 3 ? "active" : ""}`}>3</div>
    </div>
    <p>{step}:{messages[step - 1]}{" "}</p>
    <div className="btnGroup">
      <button>Previious</button>
      <button>Next</button>
    </div>
  </div>
  );
}

export default App;