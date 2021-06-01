import {getUsers, getUser, getQuestions, saveQuestion} from "../../api";

export const GET_USERS = 'GET_USERS';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const GET_QUESTIONS = 'GET_QUESTIONS '
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_USER = 'ADD_QUESTION_USER'

export function getAllUsers(users){
    return{
        type: GET_USERS,
        users
    }
}
export function fetchAllUsers() {
    return(dispatch) => {
        return getUsers().then((users) => dispatch(getAllUsers(users)))
    }
}

export function addUQuestion(question){
    return{
        type: ADD_QUESTION_USER,
        question
    }
}

export function Login(user){
    return{
        type: LOGIN,
        auth: true,
        loggedIn: user
    }
}

export function handleAuth(id){
    return(dispatch) => {
        getUser(id).then(user => {
            dispatch(Login(user))
        })
    }
}

export function Logout(){
    return{
        type: LOGOUT,
        auth: null,
        loggedIn: null
    }
}

export function handleLogout(){
    return(dispatch) => {
        dispatch(Logout())
    }
}


export function allQuestionsReceived(questions){
    return{
        type: GET_QUESTIONS,
        payload: questions
    }
}
export function getAllQuestions(){
    return(dispatch) => {
        getQuestions().then(questions => dispatch(allQuestionsReceived(questions)))
    }
}

export function addQuestion(question){
    return{
        type: ADD_QUESTION,
        question
    }
}

export function handleAddingQuestion (optionOneText, optionTwoText, cb){
    console.log(optionOneText, optionTwoText)
    return(dispatch, getState) => {
        const {authenticated} = getState();
        const author = authenticated.loggedInUser.id;
        saveQuestion({optionOneText, optionTwoText ,author}).then((question) => {
            dispatch(addQuestion(question));
            dispatch(addUQuestion(question))
        }).then(cb)
    }
}