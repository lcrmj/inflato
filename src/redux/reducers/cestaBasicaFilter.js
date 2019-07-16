import moment from "moment";
import {APPLY_FILTER_RANGE_CB, SET_FILTER_RANGE_CB} from "../actionTypes";

const initialState = {
    value: moment(),
    aux: moment()
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_FILTER_RANGE_CB:
            return {
                ...state,
                aux: action.value
            };
        case APPLY_FILTER_RANGE_CB:
            return {
                ...state,
                value: state.aux,
            };
        default:
            return state;
    }
}
