import { IAppInput } from "@/interfaces";
import { style } from "./styles/style";
import { TextInput } from "react-native";

const AppInput = ({
  type,
  placeholder,
  value,
  onChange,
}: IAppInput): JSX.Element => {
  return (
    <>
      <TextInput
        style={style.input}
        keyboardType={type}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
      />
    </>
  );
};

export default AppInput;
