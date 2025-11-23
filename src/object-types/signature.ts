interface CoordObject {
  [index: string]: number;
}

const coords: CoordObject = {
  x: 10,
};

coords.y = 15;

console.log(coords);
