type Character = { name: string; age: number; hasDriveLicense: boolean };

type C = keyof Character;

function showCharName(obj: Character, key: C) {
  return `${obj[key]}`;
}

const myChar: Character = {
  name: "Gustavo",
  age: 33,
  hasDriveLicense: true,
};

console.log(showCharName(myChar, "name"));
