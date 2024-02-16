import { EnumOfInputs } from "../../enums/inputs/inputEnums";
import {
  IDropdownInput,
  IGeneralInput,
  IRightIconInput,
} from "../../interfaces/inputs/inputInterfaces";

export type InputTypeList = {
  [EnumOfInputs.basicInput]: IGeneralInput;
  [EnumOfInputs.dropdownInput]: IDropdownInput;
  [EnumOfInputs.rightIconInput]: IRightIconInput;
};
