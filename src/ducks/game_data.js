import { generateEmptyArray, getPopulatedIndexes, generateRandomIndexes } from '../utils/array_utils'
import { getRowsOrColumnsFromGameBoard } from '../utils/game_utils'
import _ from 'lodash'

// https://softwareengineering.stackexchange.com/questions/212808/treating-a-1d-data-structure-as-2d-grid

// Constants
const SET_CELLS = 'game_data::SET_CELLS';
const DIRECTIONS = {
  37: -1, // left
  38: 1, // up
  39: 1, // right
  40: -1, // down
}

const initialState = {
  cellData: generateEmptyArray(16, 0)
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CELLS:
      return Object.assign({}, state, { cellData: action.payload.cellData })

    default: return state;
  }
}

// Actions
export function initializeGame() {
  return (dispatch, getState) => {
    var cells = getState().gameData.cellData.slice()

    // choose two random locations for the first values
    var randomIndex = generateRandomIndexes(getPopulatedIndexes(cells))
    cells[randomIndex] = 1
    var randomIndexTwo = generateRandomIndexes(getPopulatedIndexes(cells))
    cells[randomIndexTwo] = 1

    dispatch({ type: SET_CELLS, payload: { cellData: cells }})

  }
}

export function executeRound(e) {
  console.log("executing round", e.keyCode)
  return (dispatch, getState) => {
    var key = e.keyCode
    var cells = getState().gameData.cellData.slice()


    var directionalArray = getRowsOrColumnsFromGameBoard(key, cells)

    // directionalArray is now a 2D array of rows or columns,
    // now we need to condense each row/column

    // find all pairs in the array. keep in mind if a value is separated
    // by a 0, ie [0, 2, 0, 2] should condense to [4, 0, 0, 0]
    // while [1, 1, 1, 1] should condense to [2, 2, 0, 0]
    directionalArray.map((rowOrColumn, i) => {
      let newRowOrColumn = []
      let firstIndexWithValue = null
      rowOrColumn.forEach((value, j) => {
        if (value > 0)
          firstIndexWithValue = j

        if (rowOrColumn[firstIndexWithValue] === rowOrColumn[j + 1])
          newRowOrColumn[j] = rowOrColumn[j] + rowOrColumn[j + 1]

      })

      return newRowOrColumn
    })
  }
}
