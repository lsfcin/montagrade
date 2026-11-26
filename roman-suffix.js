// nextNumberedName: the name a duplicated discipline gets — its trailing Roman numeral plus one, or II when it has none
const ROMAN_DIGITS = [[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]

function toRoman(n) {
  let out = ''
  for (const [value, digits] of ROMAN_DIGITS) {
    while (n >= value) { out += digits; n -= value }
  }
  return out
}

function fromRoman(text) {
  for (let n = 1; n < 40; n++) if (toRoman(n) === text) return n
  return 0
}

function nextNumberedName(name) {
  const match  = /^(.*\S)\s+([IVX]+)$/.exec(name.trim())
  const number = match ? fromRoman(match[2]) : 0
  if (!number) return `${name.trim()} II`
  return `${match[1]} ${toRoman(number + 1)}`
}
