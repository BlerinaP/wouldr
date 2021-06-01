import React from 'react'
import Question from "./Question";
import {connect} from "react-redux";
import {getAllQuestions} from "../Redux/Actions";

class Home extends React.Component{
    state = {
        showQuestions: 'unanswered',
        activeTab: 'unanswered'
    };

    componentDidMount() {
        this.props.dispatch(getAllQuestions())
    }

    handleChange = (e, tab) => {
        this.setState(() => ({
            showQuestions: tab,
            activeTab: tab
        }))
    };

    render(){
        if(this.props.questions === undefined){
            return(
                <div>Loading...</div>
            )
        }
        let mapQuestions = Object.keys(this.props.questions).sort((a, b) => this.props.questions[b].timestamp - this.props.questions[a].timestamp)
        return(
            <div className="leaderBoard pb-4">
                <div className="buttons-handler">
                    <button className="btn" onClick={(e) => this.handleChange(e, 'unanswered')}>Unanswered Questions</button>
                    <button className="btn" onClick={(e) => this.handleChange(e, 'answered')}>Answered Questions</button>
                </div>
                <div className="questionHolder">
                    {mapQuestions.map(id => {
                        return(
                            <Question key={id} id={id} showQuestion={this.state.showQuestions}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    questions: state.AllQuestions.questions,
    authed: state.authenticated.authedUser
});
export default connect(mapStateToProps)(Home);