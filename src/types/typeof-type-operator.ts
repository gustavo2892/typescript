export const userName: string = "Maria";

export const userName2: typeof userName = "José";

type X = typeof userName;

export const userName3: X = "Joaquim";
