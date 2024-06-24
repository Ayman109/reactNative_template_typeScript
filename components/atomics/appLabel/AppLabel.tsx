import { IText } from "@/interfaces";
import { Text } from "react-native";

const AppLabel = ({ value, style }: IText) => {
  return <Text>{value}</Text>;
};

export default AppLabel;
