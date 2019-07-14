import {APPLY_FILTER_RANGE, SET_FILTER_RANGE} from "./actionTypes";

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

export const applyRange = () => {
    return {
        type: APPLY_FILTER_RANGE
    }
};
