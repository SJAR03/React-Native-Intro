export const BasicTypes = () => {
  const name: string = "Sergio";
  const age: number = 21;
  const isActive: boolean = true;

  const powers: string[] = ["React", "Angular", "Vue"];

  powers.push("Node");

  return (
    <>
      <h3>Tipos básicos</h3>
      {name} - {age}, {isActive ? "true" : "false"}
      <br />
      {powers.join(", ")}
    </>
  );
};
