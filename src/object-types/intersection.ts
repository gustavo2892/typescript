interface Human {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type HumanWithGun = Human & Gun;

export const arnold: HumanWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12,
};
