import {combineReducers} from "redux";
import {users} from "./users";
import {authenticated} from "./auth";
import {AllQuestions} from "./questions";

export default combineReducers({
    users,
    authenticated,
    AllQuestions
})