export interface RegionState {
  region: string,
}

type Action = { 
  type: "CHANGE_REGION";
  payload: string
}

const initialState = { region: localStorage.getItem('myrrSetting') ?? "urthu" }

function regionReducer(state:RegionState = initialState, action:Action,) {

  switch (action.type) {
    case 'CHANGE_REGION':
      localStorage.setItem('myrrSetting', action.payload)
      return { ...state, region: action.payload }
    default:
      return state
  }
}

export default regionReducer;