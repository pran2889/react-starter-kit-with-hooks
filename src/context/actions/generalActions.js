import * as Actions from "../constants";
export const generalActions = (props) => {
    return {
        getInfo: (data) => {
            props.dispatch({ type: Actions.GET_USER_INFO, data });
        },
        setTodaysBirtdays: (data) => {
            props.dispatch({ type: Actions.STORE_TODAYS_BIRTHDAY, data });
        }
    }
}