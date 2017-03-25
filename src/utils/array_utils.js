import _ from "lodash"

export function generateEmptyArray(num, defaultValue) {
  console.log("generating arrays:", num)
  console.log("defaultValue:", defaultValue)
  var arr = Array.apply(null, Array(num));
  return arr.map((v) => { return defaultValue })
}

export function getPopulatedIndexes(cells) {
  return _.map(cells, (v, i) => { return(v > 0 ? i : null) })
}

export function generateRandomIndexes(avoidIndexes) {
  let num = Math.floor(Math.random() * 16)
  let index = avoidIndexes.findIndex((value) => { return value === num })

  if (index === -1)
    return num
  else
    return generateRandomIndexes(avoidIndexes)
}
