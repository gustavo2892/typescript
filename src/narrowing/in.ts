export class User {
  name: string;
  lastName?: string;

  constructor(name: string, lastName?: string) {
    this.name = name;
    if (lastName) {
      this.lastName = lastName;
    }
  }
}

export const ShowName = (user: User) => {
  if ("lastName" in user) {
    console.log(`name: ${user.name} ${user.lastName}`);
  } else {
    console.log(`name: ${user.name}`);
  }
};
