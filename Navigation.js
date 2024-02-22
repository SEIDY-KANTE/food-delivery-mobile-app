import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";

const stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="HomeScreen" component={HomeScreen} />
        <stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
