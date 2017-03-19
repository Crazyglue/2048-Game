import { generateEmptyArray } from '../utils/array_utils'
import _ from 'lodash'

// Constants
const SET_GAME_DATA = 'game_data::SET_GAME_DATA';

const initialState = {
  cellData: generateEmptyArray(16, 0)
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_GAME_DATA:
      return {
        ...state,
        gameData: action.payload.gameData
      }

    default: return state;
  }
}

// Action Creators
export function setGameData(gameData) {
  console.log("settingGameData", gameData)
  return { type: SET_GAME_DATA, payload: { gameData: gameData } };
}

export function initializeGame() {
  return (dispatch, getState) => {
    var cells = getState().game_data.cellData
    var populatedIndexes = _.pull(_.map(cells, (v, i) => { return(v > 0 ? i : null) }), null)
    console.log("populated indexes", populatedIndexes)

    // dispatch({
    //   type: NEW_ROUND,
    //   payload: {
    //     {

    //     }
    //   }
    // })
    console.log("state:", getState());
  }
}
