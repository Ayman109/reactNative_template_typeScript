import { IText } from "@/interfaces";
import { Text } from "react-native";

const AppText = ({ value, style }: IText) => {
  return <Text>{value}</Text>;
};

export default AppText;
