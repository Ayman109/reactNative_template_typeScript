import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useAuth } from "@/hooks/useAuth";
import PrivateNavigation from "@/navigation/privateNavigation/PrivateNavigation";
import PublicNavigation from "@/navigation/publicNavigation/PublicNavigation";

const Stack = createStackNavigator();
const App = () => {
  const auth = useAuth();

  return (
    <NavigationContainer independent={true}>
        {auth == undefined ? (<PrivateNavigation /> ): (<PublicNavigation />)}
    </NavigationContainer>
  );
};

export default App;
