export const IncAction = () => async dispatch => {
    dispatch({
        type: "INCRIMENT"
    })
}
export const DecAction = () => async dispatch => {
    dispatch({
        type: "DECRIMENT"
    })
}