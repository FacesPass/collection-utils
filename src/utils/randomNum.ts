export function randomNum(min: number | string, max: number | string) {
  if (typeof min === 'string') {
    min = +min
  }
  if (typeof max === 'string') {
    max = +max
  }

  return Math.floor(Math.random() * (max - min + 1)) + min
}