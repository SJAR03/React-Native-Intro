import { View } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles";
import ThemeText from "@/components/ThemeText";
import CalculatorButton from "@/components/CalculatorButton";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";

const CalculatorApp = () => {
  const { formula } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>
        <ThemeText variant="h2">2500</ThemeText>
      </View>

      {/* Filas de botones */}

      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("C")}
        ></CalculatorButton>
        <CalculatorButton
          label="+/-"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("+/-")}
        ></CalculatorButton>
        <CalculatorButton
          label="del"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("del")}
        ></CalculatorButton>
        <CalculatorButton
          label="÷"
          color={Colors.orange}
          onPress={() => console.log("÷")}
        ></CalculatorButton>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="7"
          color={Colors.darkGray}
          onPress={() => console.log("7")}
        ></CalculatorButton>
        <CalculatorButton
          label="8"
          color={Colors.darkGray}
          onPress={() => console.log("8")}
        ></CalculatorButton>
        <CalculatorButton
          label="9"
          color={Colors.darkGray}
          onPress={() => console.log("9")}
        ></CalculatorButton>
        <CalculatorButton
          label="x"
          color={Colors.orange}
          onPress={() => console.log("x")}
        ></CalculatorButton>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="4"
          color={Colors.darkGray}
          onPress={() => console.log("4")}
        ></CalculatorButton>
        <CalculatorButton
          label="5"
          color={Colors.darkGray}
          onPress={() => console.log("5")}
        ></CalculatorButton>
        <CalculatorButton
          label="6"
          color={Colors.darkGray}
          onPress={() => console.log("6")}
        ></CalculatorButton>
        <CalculatorButton
          label="-"
          color={Colors.orange}
          onPress={() => console.log("-")}
        ></CalculatorButton>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="1"
          color={Colors.darkGray}
          onPress={() => console.log("1")}
        ></CalculatorButton>
        <CalculatorButton
          label="2"
          color={Colors.darkGray}
          onPress={() => console.log("2")}
        ></CalculatorButton>
        <CalculatorButton
          label="3"
          color={Colors.darkGray}
          onPress={() => console.log("3")}
        ></CalculatorButton>
        <CalculatorButton
          label="+"
          color={Colors.orange}
          onPress={() => console.log("+")}
        ></CalculatorButton>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="0"
          doubleSize
          color={Colors.darkGray}
          onPress={() => console.log("0")}
        ></CalculatorButton>
        <CalculatorButton
          label="."
          color={Colors.darkGray}
          onPress={() => console.log(".")}
        ></CalculatorButton>
        <CalculatorButton
          label="="
          color={Colors.orange}
          onPress={() => console.log("=")}
        ></CalculatorButton>
      </View>
    </View>
  );
};

export default CalculatorApp;
