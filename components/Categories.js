import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { categories } from "../constants/index";

function Categories() {
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories?.map((category) => {
          return (
            <View
              key={category.id}
              className="flex justify-center items-center mr-6"
            >
              <TouchableOpacity className={"p-1 rounded-full shadow"}>
                <Image
                  style={{ width: 45, height: 45 }}
                  source={category.image}
                />
              </TouchableOpacity>
              <Text className={"text-sm "}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Categories;
