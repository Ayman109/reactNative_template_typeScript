import { ILayout } from "@/interfaces/layouts";
import { View } from "react-native";

const MainLayout = ({ children}: ILayout):JSX.Element => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {children}
    </View>
  );
};

export default MainLayout;
