interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Addres;
  isAlive?: boolean;
}

interface Addres {
  country: string;
  houseNo: number;
}

export const ObjectLiterals = () => {
  const person: Person = {
    firstName: "Sergio",
    lastName: "Ayerdis",
    age: 21,
    address: {
      country: "Nicaragua",
      houseNo: 558,
    },
  };

  return (
    <>
      <h3>Objetos literales</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
