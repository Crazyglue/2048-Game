import { generateEmptyArray } from '../utils/array_utils'
import _ from 'lodash'
import $ from "jquery";

// https://softwareengineering.stackexchange.com/questions/212808/treating-a-1d-data-structure-as-2d-grid

// Constants
const SET_CELLS = 'game_data::SET_CELLS';

const initialState = {
  cellData: generateEmptyArray(16, 1)
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CELLS:
      return {
        ...state,
        cellData: action.payload.cellData
      }

    default: return state;
  }
}

export function executeRound() {
  return (dispatch, getState) => {
    var cells = getState().game_data.cellData
    var populatedIndexes = _.compact(_.map(cells, (v, i) => { return(v > 0 ? i : null) }))
    console.log("populated indexes", populatedIndexes)
    console.log("state", getState())
  }
}

export function initializeGame() {
  $('body').keydown((e) => console.log("keydown!", e))

  return (dispatch, getState) => {
    console.log("initializing state", getState())
    var cells = getState().gameData.cellData

    cells[Math.floor(Math.random() * 16)] = 1
    cells[Math.floor(Math.random() * 16)] = 1

    dispatch({ type: SET_CELLS, payload: { cellData: cells }})

    console.log("state:", getState());
  }
}
