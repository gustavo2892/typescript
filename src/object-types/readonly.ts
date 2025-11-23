interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: "VW",
  wheels: 4,
};

fusca.brand = "test";
// fusca.wheels = 5 Error

console.log(fusca);
