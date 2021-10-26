export function createRandomStr(len: number | string) {
  if (typeof len === 'string') {
    len = +len
  }

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charsLen = chars.length
  let randomStr = ''

  for (let i = 0; i < len; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * charsLen))
  }

  return randomStr
}