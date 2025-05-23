import { View } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles";
import ThemeText from "@/components/ThemeText";
import CalculatorButton from "@/components/CalculatorButton";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";

const CalculatorApp = () => {
  const {
    formula,
    prevNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateSubResult,
    calculateResult,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>

        {formula === prevNumber ? (
          <ThemeText variant="h2"> </ThemeText>
        ) : (
          <ThemeText variant="h2">{prevNumber}</ThemeText>
        )}
      </View>

      {/* Filas de botones */}

      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          blackText
          color={Colors.lightGray}
          onPress={clean}
        ></CalculatorButton>
        <CalculatorButton
          label="+/-"
          blackText
          color={Colors.lightGray}
          onPress={toggleSign}
        ></CalculatorButton>
        <CalculatorButton
          label="del"
          blackText
          color={Colors.lightGray}
          onPress={deleteLast}
        ></CalculatorButton>
        <CalculatorButton
          label="÷"
          color={Colors.orange}
          onPress={divideOperation}
        ></CalculatorButton>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="7"
          color={Colors.darkGray}
          onPress={() => buildNumber("7")}
        ></CalculatorButton>
        <CalculatorButton
          label="8"
          color={Colors.darkGray}
          onPress={() => buildNumber("8")}
        ></CalculatorButton>
        <CalculatorButton
          label="9"
          color={Colors.darkGray}
          onPress={() => buildNumber("9")}
        ></CalculatorButton>
        <CalculatorButton
          label="x"
          color={Colors.orange}
          onPress={multiplyOperation}
        ></CalculatorButton>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="4"
          color={Colors.darkGray}
          onPress={() => buildNumber("4")}
        ></CalculatorButton>
        <CalculatorButton
          label="5"
          color={Colors.darkGray}
          onPress={() => buildNumber("5")}
        ></CalculatorButton>
        <CalculatorButton
          label="6"
          color={Colors.darkGray}
          onPress={() => buildNumber("6")}
        ></CalculatorButton>
        <CalculatorButton
          label="-"
          color={Colors.orange}
          onPress={subtractOperation}
        ></CalculatorButton>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="1"
          color={Colors.darkGray}
          onPress={() => buildNumber("1")}
        ></CalculatorButton>
        <CalculatorButton
          label="2"
          color={Colors.darkGray}
          onPress={() => buildNumber("2")}
        ></CalculatorButton>
        <CalculatorButton
          label="3"
          color={Colors.darkGray}
          onPress={() => buildNumber("3")}
        ></CalculatorButton>
        <CalculatorButton
          label="+"
          color={Colors.orange}
          onPress={addOperation}
        ></CalculatorButton>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="0"
          doubleSize
          color={Colors.darkGray}
          onPress={() => buildNumber("0")}
        ></CalculatorButton>
        <CalculatorButton
          label="."
          color={Colors.darkGray}
          onPress={() => buildNumber(".")}
        ></CalculatorButton>
        <CalculatorButton
          label="="
          color={Colors.orange}
          onPress={calculateResult}
        ></CalculatorButton>
      </View>
    </View>
  );
};

export default CalculatorApp;
