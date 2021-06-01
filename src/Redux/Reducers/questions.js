import {ADD_QUESTION, GET_QUESTIONS} from "../Actions";

export const AllQuestions = (state = {}, action) =>{
    switch (action.type) {
        case GET_QUESTIONS:
            return{
                ...state,
                questions: action.payload
            };
        case ADD_QUESTION:
            return{
              ...state,
                [action.question.id]: action.question
            };
        default:
            return {
                ...state
            }
    }
};