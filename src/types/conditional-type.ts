interface A {
  test: string;
}

interface B extends A {
  test2: string;
}

type MyType = B extends A ? number : string;

export const someVar: MyType = 5;

interface Test {
  showName(): string;
}

export type MyTypeB = Test extends { showNumber(): number } ? string : boolean;
