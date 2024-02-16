import { EnumOfInputs } from "../enums/inputs/inputEnums";
import { InputTypeList } from "../types/inputs/inputTypes";
import Test1 from "./test/test1";
import Test2 from "./test/test2";
import Test3 from "./test/test3";

export class InputFactory<T extends keyof InputTypeList> {
  getInstance(typeOfInput: T, datos: InputTypeList[T]) {
    switch (typeOfInput) {
      case EnumOfInputs.basicInput:
        return (
          <div className="flex flex-col justify-center items-center gap-4">
            <Test1 />
            <Test2 parent={datos.parent} />
            <Test3 classname={datos.classname} />
          </div>
        );
      case EnumOfInputs.dropdownInput:
        return <Test2 />;
      case EnumOfInputs.rightIconInput:
        return <div>right icon input</div>;
      default:
        throw new Error("Tipo de entrada no soportado");
    }
    // Devuelve el componente de entrada adecuado basado en el tipo y datos
  }
}
