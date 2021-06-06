import {Link} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {formatQuestion} from "../helps";

const Question = (props) => {
    const {id, name, avatarURL, optionOne, optionTwo, voted} = props.question;

    if(props.showQuestion === 'answered' && voted !== true){
        return false;
    } else if (props.showQuestion  === 'unanswered' && voted === true) {
        return false;
    }
    let link = '';
    if(props.showQuestion === 'answered'){
        link = `/question/${id}/results`
    } else if (props.showQuestion  === 'unanswered') {
        link = `/question/${id}`
    }

    return(
        <div className="card mb-4">
            <h5 className="card-header">{name} asks would you rather...</h5>
            <div className="card-body">
                <div className="profileImage-holder">
                    <img src={avatarURL} alt=""/>
                </div>
                <div className="infoProfile-holder">
                    <h5 className="card-title">Would You rather</h5>
                    <p className="card-text">{optionOne.text} or {optionTwo.text}</p>
                    <Link to={link} className="btn">View Poll</Link>
                </div>
            </div>

        </div>
    )
};
function mapStateToProps(state, {id, showQuestions}){
    const question = state.AllQuestions.questions[id];
    return{
        question: formatQuestion(question, state.users.users[question.author], state.authenticated.loggedInUser.id),
        showQuestions
    }

}
export default connect(mapStateToProps)(Question);