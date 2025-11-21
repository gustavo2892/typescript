type Params = number | string;

export function sum(a: Params, b: Params) {
  if (typeof a === "string" && typeof b === "string") {
    return console.log(parseFloat(a) + parseFloat(b));
  } else if (typeof a === "number" && typeof b === "number") {
    return console.log(a + b);
  } else {
    return console.log("It's impossible to complete the sum.");
  }
}
