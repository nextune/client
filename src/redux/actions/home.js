export const TOGGLE_MORE_INFO = 'MORE_INFO';

export const toggleMoreInfo = moreInfo => dispatch => {
    dispatch({
        type: TOGGLE_MORE_INFO,
        payload: moreInfo
    })
}