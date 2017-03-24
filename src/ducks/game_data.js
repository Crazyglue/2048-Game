import { generateEmptyArray } from '../utils/array_utils'
import _ from 'lodash'
import $ from "jquery";

// https://softwareengineering.stackexchange.com/questions/212808/treating-a-1d-data-structure-as-2d-grid

// Constants
const SET_CELLS = 'game_data::SET_CELLS';

const initialState = {
  cellData: generateEmptyArray(16, 0)
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CELLS:
      console.log("setting cellData", state.cellData)
      return Object.assign({}, state, { cellData: action.payload.cellData })

    default: return state;
  }
}

// export function executeRound() {
//   return (dispatch, getState) => {
//     var cells = getState().game_data.cellData
//     var populatedIndexes = getPopulatedIndexes(cells)
//   }
// }

export function getPopulatedIndexes(cells) {
  return _.compact(_.map(cells, (v, i) => { return(v > 0 ? i : null) }))
}

export function generateRandomIndexes(avoidIndexes = []) {
  let num = Math.floor(Math.random() * 16)
  console.log("iterating random index:", num)

  if (_.findIndex(avoidIndexes, num) === -1)
    return num
  else
    console.log("conflict with existing index:", num)
    generateRandomIndexes(avoidIndexes)
}

export function initializeGame() {
  $('body').keydown((e) => console.log("keydown!", e))

  return (dispatch, getState) => {
    console.log("initializing state", getState())
    var cells = getState().gameData.cellData.slice()

    var randomIndex = generateRandomIndexes(getPopulatedIndexes(cells))
    console.log("randomIndex", randomIndex)
    cells[randomIndex] = 1

    console.log("new cells", cells)

    dispatch({ type: SET_CELLS, payload: { cellData: cells }})

  }
}
