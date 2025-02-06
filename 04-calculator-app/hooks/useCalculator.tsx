import { useRef, useState } from "react";

enum Operator {
  add = "+",
  subtract = "-",
  multiply = "x",
  divide = "÷",
}
export const useCalculator = () => {
  const [formula, setFormula] = useState("");

  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");

  const lastOperation = useRef<Operator>();

  const buildNumber = (numberString: string) => {
    console.log({ numberString });
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
