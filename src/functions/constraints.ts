export interface BiggestNumberType {
  <T extends number | string>(a: T, b: T): T;
}

export const biggestNumber: BiggestNumberType = (a, b) => {
  if (+a > +b) {
    return a;
  }

  return b;
};

export interface MergedArrayType {
  <T>(a: T[], b: T[]): T[];
}

export const mergedArray: MergedArrayType = (arr1, arr2) => {
  return arr1.concat(arr2);
};

mergedArray<string | number>([1], ["2"]);
