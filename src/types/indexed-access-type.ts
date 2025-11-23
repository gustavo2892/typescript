type Truck = {
  km: number;
  kg: number;
  description: string;
};

type Km = Truck["km"];

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: "test",
};

function showKm(km: Km) {
  return console.log(`Km: ${km}`);
}

showKm(newTruck.km);
