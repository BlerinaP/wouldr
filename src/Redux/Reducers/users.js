import {GET_USERS, SAVE_USER_ANSWER, ADD_QUESTION_USER} from "../Actions";

export const users = (state = {}, action) =>{
    switch (action.type) {
        case GET_USERS:
            return{
                ...state,
                ...action.users
            };
        case ADD_QUESTION_USER:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: [...state[action.question.author].questions, action.question.id]
                }
            };
        case SAVE_USER_ANSWER:
            return{
                ...state,
                [action.authedUser] : {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            };
        default: return state
    }
}
