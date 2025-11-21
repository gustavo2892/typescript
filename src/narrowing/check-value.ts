type Operations = "sum" | "multiply";

export function operations(arr: number[], operation?: Operations | undefined) {
  if (operation) {
    if (operation === "sum") {
      const sum = arr.reduce((i, total) => i + total);
      return console.log(sum);
    } else {
      const multiply = arr.reduce((i, total) => i * total);
      return console.log(multiply);
    }
  } else {
    return console.log("Please, define an operation.");
  }
}
