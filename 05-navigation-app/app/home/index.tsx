import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <Link href="/products" asChild>
          <CustomButton className="mb-10" color="primary">
            Productos
          </CustomButton>
        </Link>

        <CustomButton
          className="mb-10"
          color="primary"
          onPress={() => router.push("/products")}
        >
          Productos
        </CustomButton>

        <CustomButton
          variants="text-only"
          onPress={() => router.push("/products")}
          className="mb-10"
        >
          Productos
        </CustomButton>
        {/* <Text className="text-blue-400">Hola</Text> */}

        {/* <Link className="mb-5" href="/products">
          Productos{" "}
        </Link>
        <Link className="mb-5" href="/profile">
          Perfil{" "}
        </Link>
        <Link className="mb-5" href="/settings">
          Ajustes{" "}
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
