export interface GenericFunctionType {
  <T>(arr: T[]): T;
}

export const firstElement: GenericFunctionType = (arr) => {
  return arr[0];
};

console.log(firstElement([1, 2, 3])); // 1
console.log(["a", "b", "c"]); // a

export interface MergeObjectsType {
  <T, U>(obj1: T, obj2: U): U & T;
}

export const mergeObjects: MergeObjectsType = (obj1, obj2) => {
  return {
    ...obj1,
    ...obj2,
  };
};
