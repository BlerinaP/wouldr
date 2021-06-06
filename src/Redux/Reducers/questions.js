import {ADD_QUESTION, GET_QUESTIONS, SAVE_ANSWER} from "../Actions";

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
        case SAVE_ANSWER :
            return{
                ...state,
                [action.qid] : {
                    ...state.questions[action.qid],
                    [action.answer]:{
                        ...state.questions[action.qid][action.answer],
                        votes: state.questions[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            };
        default:
            return state
    }
};