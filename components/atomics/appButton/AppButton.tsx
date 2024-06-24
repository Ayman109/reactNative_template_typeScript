import { IAppButton } from "@/interfaces";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles/style";
import { useThemeColor } from "@/hooks/useThemeColor";


const AppButton = ({ value, isDisabled, onPress, style }: IAppButton) => {
  const {themeChangeState , getColors } = useThemeColor();
  
  return (
    <>
      <TouchableOpacity style={[styles.button , {backgroundColor : getColors().primary} ]} onPress={onPress} disabled={isDisabled}>
        <Text style = {[{color : getColors().buttonText}]} > {value} </Text>
      </TouchableOpacity>
    </>
  );
};

export default AppButton;
