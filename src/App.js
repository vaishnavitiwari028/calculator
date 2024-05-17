import { useState } from "react";
import "./App.css";

function App() {
  const buttons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "+", "*", "/", "=", "C"];
  const [ibValue, setIbValue] = useState('');
  const clickHandler = (clickItem) => {
    if (clickItem === "=") {
      setIbValue(eval(ibValue))
    }else if(clickItem==='C'){
      setIbValue('')
    }else {
      setIbValue(ibValue + clickItem); 
    }
  };

  return (
    <div className="calculator">
      <input
        type="text"
        className="input_screen"
        value={ibValue}
        onChange={(e) => setIbValue(e.target.value)}
      />
      <div className="input_buttons">
        {buttons.map((item) => {
          return (
          <button onClick={() => clickHandler(item)}>{item}</button>
          )
        })}
      </div>
    </div>
  );
}

export default App;
