import Home from "@/app/Home/Home";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const PrivateNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
    
  );
};

export default PrivateNavigation;
