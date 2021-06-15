import { SET_PLAYING } from "../actions/media";

const initialState = {
    isPlaying: false
}

function mediaReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PLAYING:
            return { ...state, isPlaying: action.payload }
        default:
            return state;
    }
}

export default mediaReducer;