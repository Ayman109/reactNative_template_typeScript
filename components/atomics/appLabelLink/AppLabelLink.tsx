import { IText } from "@/interfaces";
import { Text } from "react-native";

const AppLabelLink = ({ value, style, onPress }: IText) => {
  return <Text onPress={onPress}>{value}</Text>;
};

export default AppLabelLink;
