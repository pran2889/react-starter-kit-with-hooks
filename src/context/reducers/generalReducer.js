import * as Actions from "../constants";
export const generalStates = {
    data: [],
    todaysBirthday: []
}

export const generalReducer = (state, action) => {
    switch (action.type) {
        case Actions.GET_USER_INFO:
            return {
                ...state,
                data: action.data
            };
        case Actions.STORE_TODAYS_BIRTHDAY:
            return {
                ...state,
                todaysBirthday: action.data
            };
        default:
            throw new Error("Unexpected action");
    }
};