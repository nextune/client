export const SET_PLAYING = "SET_PLAYING";

export const setPlaying = isPlaying => dispatch => {
    dispatch({
        type: SET_PLAYING,
        payload: isPlaying
    })
}