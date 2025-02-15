import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  subtract = "-",
  multiply = "x",
  divide = "÷",
}
export const useCalculator = () => {
  const [formula, setFormula] = useState("0");

  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    // TODO: Calcular subresultado
    setFormula(number);
  }, [number]);

  const buildNumber = (numberString: string) => {
    // Verificar si ya existe un punto
    if (number.includes(".") && numberString === ".") return;

    if (number.startsWith("0") || numberString.startsWith("-0")) {
      if (numberString === ".") {
        return setNumber(number + numberString);
      }

      // Evaluar si es otro 0 y no hay un punto
      if (numberString === "0" && number.includes(".")) {
        return setNumber(number + numberString);
      }

      // Evaluar si es un número diferente de 0, no hay punto decimal y es el primer número
      if (numberString !== "0" && !number.includes(".")) {
        return setNumber(numberString);
      }
    }

    setNumber(number + numberString);
  };

  return {
    // Props
    formula,
    number,
    prevNumber,

    // Methods
    buildNumber,
  };
};
