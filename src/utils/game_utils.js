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
