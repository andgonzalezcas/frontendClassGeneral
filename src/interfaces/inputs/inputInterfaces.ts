import { HTMLInputTypeAttribute, ReactNode } from "react";
import { fontType, sizeType } from "../../types/generalTypes";

export interface IGeneralInput {
  classname?: string
  size?: sizeType;
  font?: fontType;
  type?: HTMLInputTypeAttribute;
  isDisabled?: boolean;
  placeholder?: string;
  parent?: {
    sendInput: (inputValue: string) => void;
    getInput: () => string;
  };
  error?: {
    validator: () => boolean;
    message: string;
  };
  onClick?: () => void;
}

export interface IRightIconInput extends IGeneralInput {
  rightIcon?: {
    icon: ReactNode;
    handleClick: () => void;
  };
  // getdropdown?: () => void;
}

export interface IDropdownInput extends IRightIconInput {
  cosa2?: string
  // saludo: string = 'hola'
  // getdropdown() {} 
}