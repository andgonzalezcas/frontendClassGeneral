import { useState } from "react";
import "./App.css";
import { InputFactory } from "./components/Input.tsx";
import { EnumOfInputs } from "./enums/inputs/inputEnums.ts";

function App() {
  const Input = new InputFactory();
  const [counterGlobal, setCounterGlobal] = useState<string>("0");

  return (
    <div className="flex flex-col justify-center items-center">
      {Input.getInstance(EnumOfInputs.basicInput, {})}
      {Input.getInstance(EnumOfInputs.basicInput, {
        classname: "bg-red-400",
        parent: {
          sendInput: (newValue) => {
            setCounterGlobal(newValue);
          },
          getInput: () => "",
        },
      })}
      <p>counterGlobal: {counterGlobal}</p>
    </div>
  );
}

export default App;
