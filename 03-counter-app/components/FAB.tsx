import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface Props {
  label: string;
  position?: "left" | "right";

  // Methods
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({ label, onPress, onLongPress, position }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.floatingButton,
        position == "right" ? styles.positionRight : styles.positionLeft,
        pressed ? { opacity: 0.8 } : { opacity: 1 },
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ color: "white", fontSize: 20 }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#65558f",
    padding: 20,
    borderRadius: 15,
    elevation: 5,
  },

  positionRight: {
    right: 20,
  },
  positionLeft: {
    left: 20,
  },
});
