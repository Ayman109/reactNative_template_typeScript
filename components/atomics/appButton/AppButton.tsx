import { IAppButton } from "@/interfaces";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles/style";
import { useThemeColor } from "@/hooks/useThemeColor";


const AppButton = ({ value, isDisabled, onPress, style }: IAppButton) => {
  const theme  = useThemeColor() ;
  return (
    <>
      <TouchableOpacity style={[styles.button , {backgroundColor : theme.primary} ]} onPress={onPress} disabled={isDisabled}>
        <Text style = {[{color : theme.buttonText}]} > {value} </Text>
      </TouchableOpacity>
    </>
  );
};

export default AppButton;
