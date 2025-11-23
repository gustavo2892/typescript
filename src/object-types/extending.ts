interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superpowers: Array<string>;
}

const Guku: SuperHuman = {
  name: "Goku",
  age: 50,
  superpowers: ["SSJ"],
};

console.log(Guku);
