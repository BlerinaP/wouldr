import {LOGIN, LOGOUT} from "../Actions";

export const authenticated = (state = {}, action) =>{
    switch (action.type) {
        case LOGIN:
            return{
                ...state,
                authedUser: action.auth,
                loggedInUser: action.loggedIn
            };
        case LOGOUT:
            return{
                ...state,
                authedUser: action.auth,
                loggedInUser: action.loggedIn
            };
        default:
            return {
                ...state
            }
    }
}
