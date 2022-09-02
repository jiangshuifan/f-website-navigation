
//getRGB:由rgb(0,0,0)或#000得到rgb对应值
function getRGB(color) {
  if (color.indexOf('rgb') !== -1) {
    return color
      .split('(')[1]
      .split(')')[0]
      .split(',')
      .map((v) => (v = parseFloat(v)))
  } else {
    color = color.toUpperCase()
    let hexadecimal = new WeakMap()
    hexadecimal = {
      '0': 0,
      '1': 1,
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
    }
    let rgbArr = []
    let a
    color
      .split('#')[1]
      .split('')
      .forEach((v, i) => {
        if (i % 2 === 0) {
          a = parseFloat(hexadecimal[v])
        } else {
          rgbArr.push(parseFloat(hexadecimal[v]) * 1 + a * 16)
        }
      })

    return rgbArr
  }
}
function RGBToHexadecimal(RGBColor) {
  let colorArr = getRGB(RGBColor)
  let rule = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
  }
  let hexadecimalColor = '#'
  colorArr.forEach((v) => {
    hexadecimalColor += rule[Math.floor(v / 16)] + rule[v % 16]
  })
  console.log(hexadecimalColor)
  return hexadecimalColor
}

function hexadecimalToRGB(hexadecimalColor) {
  let arr = getRGB(hexadecimalColor)
  return 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ')'
}

function hexadecimalToHSL(hexadecimalColor) {
  let [r, g, b] = getRGB(hexadecimalColor)
  let max = Math.max(...[r, g, b])
  let min = Math.min(...[r, g, b])
  let h, s, l
  l = (max + min) / 2
  if (max === min) {
    h = 0
  } else if (max === r && g >= b) {
    h = (60 * (g - b)) / (2 * l)
  } else if (max === r && g < b) {
    h = (60 * (g - b)) / (2 * l) + 360
  } else if (max === g) {
    h = (60 * (b - r)) / (2 * l) + 120
  } else {
    h = (60 * (r - g)) / (2 * l) + 240
  }
  if (0 === max) {
    s = 0
  } else {
    s = 1 - min / max
  }
  return (
    'hsl(' +
    parseInt(h) +
    ',' +
    s.toFixed(2) * 100 +
    '%,' +
    parseInt((l / 255) * 100) +
    '%)'
  )
}

export default {
  RGBToHexadecimal,hexadecimalToRGB,hexadecimalToHSL,getRGB
}