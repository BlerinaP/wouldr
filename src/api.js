import {_getUsers, _getUser, _saveQuestion, _getQuestions, _saveQuestionAnswer} from "./_DATA";

export function getUsers() {
   return _getUsers()
}
export function getUser(id) {
   return _getUser(id)
}
export function saveQuestion(question){
   return _saveQuestion(question)
}
export function getQuestions(){
   return _getQuestions()
}
export function saveQuestionAnswer(data){
   return _saveQuestionAnswer(data)
}