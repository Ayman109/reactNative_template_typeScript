import Login from "@/app/Login/Login";
import Subscribe from "@/app/subscribe/Subscribe";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const PublicNavigation = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Subscribe" component={Subscribe} />
    </Stack.Navigator>
  );
};

export default PublicNavigation;
