export function mathRandom(min: number = 0, max: number): number {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}
