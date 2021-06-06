import {GET_USERS, SAVE_USER_ANSWER} from "../Actions";

export const users = (state = {}, action) =>{
    switch (action.type) {
        case GET_USERS:
            return{
                ...state,
                users: action.users
            };
        case SAVE_USER_ANSWER:
            return{
                ...state,
                [action.authedUser] : {
                    ...state.users[action.authedUser],
                    answers: {
                        ...state.users[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            };
        default:
            return {
                ...state
            }
    }
}
