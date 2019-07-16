import {APPLY_FILTER_RANGE, SET_FILTER_RANGE_CB, SET_FILTER_RANGE, APPLY_FILTER_RANGE_CB} from "./actionTypes";

export const setFilterRange = (de, ate) => {

   if (de > ate) {
       de = ate;
   }  else if (ate < de) {
       ate = de;
   }

    return {
        type: SET_FILTER_RANGE,
        range: {
            de: de,
            ate: ate
        }
    };
};

export const setDateCb = (data) => {
    return {
        type: SET_FILTER_RANGE_CB,
        value: data
    };
};

export const applyDateCb = () => {
    return {
        type: APPLY_FILTER_RANGE_CB
    };
};

export const applyRange = () => {
    return {
        type: APPLY_FILTER_RANGE
    }
};
