import { IGeneralInput } from "../../interfaces/inputs/inputInterfaces";

const Test3 = ({ classname }: IGeneralInput) => {
  return <div className={`h-12 w-12 bg-white rounded-full ${classname}`}></div>;
};

export default Test3;
