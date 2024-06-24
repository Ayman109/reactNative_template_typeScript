import { StyleProp } from "react-native";

interface IAppInput {
  type:
    | "default"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "number-pad"
    | "decimal-pad"
    | "visible-password";
  placeholder?: string;
  value: string;
  onChange: (text: string) => void;
  style?: any;
}

interface IAppButton {
  value: string;
  onPress: () => void;
  style?: any;
  isDisabled: boolean;
}

interface IText {
  value: string;
  onPress: () => void;
  style?: any;
}

export { IAppInput, IAppButton, IText };
