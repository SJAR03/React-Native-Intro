export const BasicFunctions = () => {
  const addTwoNumber = (a: number, b: number): string => {
    // return a + b;
    return `${a + b}`;
  };

  return (
    <>
      <h3>Funciones básicas</h3>
      <span>El resultado de sumar: {addTwoNumber(5, 5)}</span>
    </>
  );
};
