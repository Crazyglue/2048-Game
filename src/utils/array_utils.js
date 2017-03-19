export function generateEmptyArray(num, defaultValue) {
  console.log("generating arrays:", num)
  console.log("defaultValue:", defaultValue)
  var arr = Array.apply(null, Array(num));
  return arr.map((v) => { return defaultValue })
}
