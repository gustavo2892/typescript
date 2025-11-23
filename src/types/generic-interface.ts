interface MyObject<T, U> {
  name: string;
  wheels: T;
  engine: U;
}

type Car = MyObject<number, number>;

export const myCar: Car = {
  name: "Fusca",
  wheels: 4,
  engine: 1.0,
};
