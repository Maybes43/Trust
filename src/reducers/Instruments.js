import * as actions from '../constants/actionTypes'

const initState = {
    instruments: [],
};

export default function instruments (state = initState, action) {
    switch (action.type) {
        case actions.GET_ALL_INSTRUMENTS:
            return {
                ...state,
                instruments: action.payload
            };
        default:
            return state
    }
}