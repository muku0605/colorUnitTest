import "./App.css";
import { useState } from "react";
export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [color, setColor] = useState("red");
  const [isDisabled, setDisable] = useState(false);
  const newButtonColor = color === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: isDisabled ? "gray" : color }}
        onClick={() => setColor(newButtonColor)}
        disabled={isDisabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="enable-button-checkbox"
        onChange={(e) => {
          setDisable(e.target.checked);
        }}
      ></input>
      <label htmlFor="enable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
