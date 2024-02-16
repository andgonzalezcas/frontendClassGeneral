import { useState } from "react";
import { IGeneralInput } from "../../interfaces/inputs/inputInterfaces";

const Test2 = ({ parent }: IGeneralInput) => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      <p>counter: {counter}</p>
      <button
        onClick={() => {
          setCounter((preValue) => {
            const newValue = preValue + 1;
            parent?.sendInput(newValue + "");
            return newValue;
          });
        }}
      >
        count + 1
      </button>
    </div>
  );
};

export default Test2;
