import { TOGGLE_MORE_INFO } from "../actions/home";

const initialState = {
    moreInfo: false
}

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MORE_INFO:
            return { ...state, moreInfo: action.payload }
        default:
            return state;
    }
}

export default homeReducer;