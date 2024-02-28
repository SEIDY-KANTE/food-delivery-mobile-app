import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import CartScreen from "./screens/CartScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

const stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="HomeScreen" component={HomeScreen} />
        <stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
        <stack.Screen name="CartScreen" component={CartScreen} />
        <stack.Screen
          name="PreparingOrderScreen"
          component={PreparingOrderScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <stack.Screen
          name="DeliveryScreen"
          component={DeliveryScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
