import React from "react";
import {connect} from "react-redux";
import {handleAddingQstAnsw} from "../Redux/Actions";
import {Redirect }from "react-router-dom"



class Poll extends React.Component{
    state={
        selectedOpt: "",
        submited: false
    };

    handleChange = (e) => {
        const res = e.target.value
        this.setState(() => ({
            selectedOpt: res
        }))
    };

    submitAnsw = (e, qid) => {
        e.preventDefault();
        const answ = this.state.selectedOpt;
        this.props.dispatch(handleAddingQstAnsw(qid, answ));
        this.setState(() => ({
            selectedOpt: '',
            submited: true
        }))
    };

    render(){
        const {optionOne, optionTwo, id} = this.props.question;
        const {name, avatarURL} = this.props.author;

        const redirect = `/question/${id}/results`
        if(this.state.submited === true){
            return  <Redirect to={redirect}/>;
        }
        return(
            <div className="poll-container">
                <div className="container pt-5">
                    <div className="card w-50 mx-auto">
                        <h5 className="card-header">{name} asks would you rather...</h5>
                        <div className="card-body d-flex align-items-center">
                            <div className="profileImage-holder-poll">
                                <img src={avatarURL} alt=""/>
                            </div>
                            <div className="infoProfile-holder m-auto">
                                <h5 className="card-title">Would You rather</h5>
                                <form onSubmit={(e) => this.submitAnsw(e, id)}>
                                    <div>
                                        <input type="radio" name="rather" value='optionOne' onChange={this.handleChange}/>
                                        <span className="ml-2">{optionOne.text}</span>
                                    </div>
                                    <div>
                                        <input type="radio" name="rather" value='optionTwo' onChange={this.handleChange}/>
                                        <span className="ml-2">{optionTwo.text}</span>
                                    </div>
                                    <button className="btn poll-btn" type="submit" disabled={this.state.selectedOpt === ""}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state, props) {
    const {id} = props.match.params;
    let questions = state.AllQuestions.questions

    let detailsQuestion = "";
    let authorDetails = "";
    if (questions[id] !== undefined) {
        detailsQuestion = questions[id];
        authorDetails = state.users.users[detailsQuestion['author']]
    }
    return {
        id,
        question: detailsQuestion,
        author: authorDetails,
        authedUser: state.authenticated.loggedInUser.id
    }
}
export default connect(mapStateToProps)(Poll)