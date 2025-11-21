export class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

export class SuperUser extends User {
  constructor(name: string) {
    super(name);
  }
}

export const jhon = new User("Jhon");
export const paul = new SuperUser("Paul");

export function userGreeting(user: object) {
  if (user instanceof SuperUser) {
    return console.log(`Hello Super User ${user.name}`);
  } else if (user instanceof User) {
    return console.log(`Hello User ${user.name}`);
  }
}
