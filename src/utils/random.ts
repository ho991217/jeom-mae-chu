export function getRandomInteger(length: number) {
  return Math.floor(Math.random() * length);
}

export function getRandomValue(array: Record<string, any> | any) {
  const length = array.length;
  return array[getRandomInteger(length)];
}
