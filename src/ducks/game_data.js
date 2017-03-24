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

export function initializeGame() {
  // $('body').keydown((e) => console.log("keydown!", e))

  return (dispatch, getState) => {
    var cells = getState().gameData.cellData.slice()

    var randomIndex = generateRandomIndexes(getPopulatedIndexes(cells))
    cells[randomIndex] = 1

    dispatch({ type: SET_CELLS, payload: { cellData: cells }})

  }
}
