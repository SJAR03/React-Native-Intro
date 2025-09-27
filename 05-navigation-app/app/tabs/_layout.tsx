import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "green" }}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home Screen",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favorites Screen",
          tabBarIcon: ({ color }) => (
            <Ionicons name="star-outline" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
