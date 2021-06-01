import {GET_USERS} from "../Actions";

export const users = (state = {}, action) =>{
    switch (action.type) {
        case GET_USERS:
            return{
                ...state,
                users: action.users
            }
        default:
            return {
                ...state
            }
    }
}
