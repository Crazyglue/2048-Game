import _ from "lodash"

const GAMEBOARD_WIDTH = 4

export function getRowsOrColumnsFromGameBoard(key, cells) {
  var tempArray = []
  if (key === 37 || key === 39) { // left or right
      for (let i = 0; i < GAMEBOARD_WIDTH; i++) {
        let values = getValuesForRow(cells, i)
        console.log("getting values for row " + i, values)
        tempArray.push(values)
      }
    }
    else if (key === 38 || key === 40) { // up or down
      for (let i = 0; i < GAMEBOARD_WIDTH; i++) {
        let values = getValuesForColumn(cells, i)
        console.log("getting values for column " + i, values)
        tempArray.push(values)
      }
    }

    return tempArray
}

function getValuesForColumn(cells, column) {
  return _.filter(cells, (cellValue, index) => {
    return parseInt(index % GAMEBOARD_WIDTH, 10) === column
  })
}

function getValuesForRow(cells, row) {
  return _.filter(cells, (cellValue, index) => {
    return parseInt(index / GAMEBOARD_WIDTH, 10) === row
  })
}

// rowOrColumn: Array of values
// index: The index of the row or column (ie, 0 is the 1st row)
export function reduceGameData(rowOrColumn, index) {
  console.log("============== index " + index + " ===============")
  // directionalArray is a 2D array of rows or columns,
  // now we need to condense each row/column

  // Find all pairs in the array, and shift them over depending
  // on the direction. keep in mind if a value is separated by
  // a 0, ie [0, 2, 0, 2], it should condense to [4, 0, 0, 0].
  // While [1, 1, 1, 1] should condense to [2, 2, 0, 0] and
  // [1, 4, 1, 1] condenses to [1, 4, 2, 0] 

  // Find the first value, then hold index. Find the next value
  // and split the array between those indexes. Reset, and do
  // it again. Etc. Take each split array and combine them. Add
  // zeroes to the front or back depending on direction.
  let startIndex = 0
  let containerArray = []

  // make sure it isnt an empty array
  if (_.compact(rowOrColumn.slice()).length > 0) {
    // find the first index with a value > 0
    startIndex = _.findIndex(rowOrColumn, (value) => { return value > 0 })
    if (startIndex > 0){
      let firstArray = _.slice(0, startIndex)
      containerArray.push(firstArray)
      startIndex += 1
    }
    else
      containerArray.push(_.slice(startIndex, rowOrColumn.length))
    console.log("startIndex", startIndex)
    console.log("splitArray", splitArray(rowOrColumn, startIndex, containerArray))
  }
  else {
    console.log("empty array", rowOrColumn)
    return rowOrColumn
  }

  // console.log("startIndex", startIndex)
  // console.log("splitArray", splitArray(rowOrColumn, startIndex, containerArray))
}

function splitArray(array, startIndex, containerArray = []) {
  let endIndex = array.length
  for (let i = startIndex + 1; i < array.length; i++) {
    if (array[startIndex] === array[i] && array[i] !== 0) {
      endIndex = i + 1
      break
    }
  }

  console.log("endIndex", endIndex)

  let tempSplitArray = _.slice(array, startIndex, endIndex)
  containerArray.push(tempSplitArray)

  if (endIndex === array.length)
    return containerArray
  else
    splitArray(array, endIndex, containerArray)

}