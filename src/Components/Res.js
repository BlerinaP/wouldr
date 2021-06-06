import React from "react"
import {connect} from "react-redux";

const ResPoll = (props) => {

    const {name, avatarURL} = props.author;
    const {optionOne, optionTwo, id} = props.question;

    let iVoted = optionOne.votes.includes(props.author.id) ? "optionOne" : "optionTwo";

    let total = optionOne.votes.length + optionTwo.votes.length;
    let OptionOneVotes = Math.round((optionOne.votes.length / total) * 100);
    let OptionTwoVotes = Math.round((optionTwo.votes.length / total) * 100);

    return(
        <div>
            <div className="poll-container">
                <div className="container pt-5">
                    <div className="card w-50 mx-auto">
                        <h5 className="card-header">{name} asks would you rather...</h5>
                        <div className="card-body d-flex align-items-center">
                            <div className="profileImage-holder-poll">
                                <img src={avatarURL} alt=""/>
                            </div>
                            <div className="infoProfile-holder m-auto">
                                <h5 className="card-title">Results</h5>
                                <div className={`poll-bar ${iVoted === 'optionOne' ? "iChoose" : ''}`}>
                                    <h3 style={{fontSize: '20px', color: 'grey'}}>Would tou rather {optionOne.text} </h3>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                             aria-valuemin="0" aria-valuemax="100" style={{width: `${OptionOneVotes}%`}}>
                                            {OptionOneVotes}%
                                        </div>
                                    </div>
                                    <span>{optionOne.votes.length} out of {total} votes</span>
                                </div>
                                <div className={`poll-bar ${iVoted === 'optionTwo' ? "iChoose" : ''}`}>
                                    <h3 style={{fontSize: '20px', color: 'grey'}}>Would you rather {optionTwo.text}</h3>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                             aria-valuemin="0" aria-valuemax="100" style={{width: `${OptionTwoVotes}%`}}>
                                            {OptionTwoVotes}%
                                        </div>
                                    </div>
                                    <span>{optionTwo.votes.length} out of {total} votes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
function mapStateToProps(state, props) {
    const {id} = props.match.params;
    let questions = state.AllQuestions.questions

    let detailsQuestion = "";
    let authorDetails = ""
    if (questions[id] !== undefined) {
        detailsQuestion = questions[id];
        authorDetails = state.users.users[detailsQuestion['author']]
    }
    return {
        id,
        question: detailsQuestion,
        author: authorDetails
    }
}
export default connect(mapStateToProps)(ResPoll)