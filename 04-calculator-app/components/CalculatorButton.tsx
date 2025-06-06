import { Pressable, Text } from "react-native";

import * as Haptics from "expo-haptics";

import React from "react";
import { globalStyles } from "@/styles/global-styles";
import { Colors } from "../constants/Colors";

interface Props {
  label: string;
  color: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress: () => void;
}

const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  blackText = false,
  doubleSize = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80,
      })}
      onPress={() => {
        // TODO: Add haptic feedback
        //Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        //Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        Haptics.selectionAsync();
        onPress();
      }}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? "black" : "white",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton;
