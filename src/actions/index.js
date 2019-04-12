import * as actions from '../constants/actionTypes'
import request from '../utils/api'

export function getInstruments () {
    return async function (dispatch) {
        const data = await request.getInstruments();

        dispatch({ type: actions.GET_ALL_INSTRUMENTS, payload: data })
    }
}