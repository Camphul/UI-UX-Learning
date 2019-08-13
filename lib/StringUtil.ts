/**
 * Uppercase the first letter of a string.
 * @param value string to uppercase.
 */
function uppercaseFirstLetter (value: string): string {
  if (value.length <= 1) {
    return value.toLocaleUpperCase()
  }
  const firstLetter = value.charAt(0).toLocaleUpperCase()
  return firstLetter + value.substring(1, value.length)
}

export default {
  uppercaseFirstLetter
}
