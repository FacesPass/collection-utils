/**
 * 千分位转换
 */
export function spliceThousand(number: string | number) {
  let str = ''
  const arr = number.toString().split('')
  let length = arr.length

  while (length > 3) {
    str = `,${arr.splice(-3).join('')}` + str
    length = arr.length
  }

  return arr.join('') + str
}