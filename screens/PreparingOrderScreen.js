import { View, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function PreparingOrderScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    // Move to Delivery Screen after 3 seconds
    setTimeout(() => {
      navigation.navigate("DeliveryScreen");
    }, 3000);
  }, []);
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
        source={require("../assets/images/delivery.gif")}
        className="h-80 w-80"
      />
    </View>
  );
}
