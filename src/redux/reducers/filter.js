import {APPLY_FILTER_RANGE, SET_FILTER_RANGE} from "../actionTypes";

const initialState = {
    de: new Date(),
    ate: new Date(),
    aux: {
        de: new Date(),
        ate: new Date()
    }
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_FILTER_RANGE:
            return {
                ...state,
                aux: {
                    de: action.range.de,
                    ate: action.range.ate
                }
            };
        case APPLY_FILTER_RANGE:
            return {
                ...state,
                de: state.aux.de,
                ate: state.aux.ate
            };
        default:
            return state;
    }
}
