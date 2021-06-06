import React from 'react'
import {handleAddingQuestion} from "../Redux/Actions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom"

class NewQuestion extends React.Component{
    state={
        option_one: '',
        option_two: '',
        home: false
    };

    changeOptionOne = (e) => {
        this.setState({
            option_one: e.target.value
        })
    };

    changeOptionTwo = (e) => {
        this.setState({
            option_two: e.target.value
        })
    };

    questionSubmit = (e) => {
        e.preventDefault()
        let optionOneText = this.state.option_one
        let optionTwoText = this.state.option_two
        this.props.dispatch(handleAddingQuestion(optionOneText, optionTwoText))
        this.setState(() => ({
            home: true
        }))
    };

    render(){
        if(this.state.home === true){
            return <Redirect to="/"/>
        }
        return(
            <div className="newQuestionCard">
                <div>
                    <h2>Create New Question</h2>
                    <span>Complete this Question</span>
                    <h4>Would you rather...</h4>
                    <form onSubmit={this.questionSubmit}>
                        <div>
                            <input
                                type="text"
                                value={this.state.option_one}
                                onChange={(e) => this.changeOptionOne(e)}
                            />
                            <span>Or</span>
                            <input
                                type="text"
                                value={this.state.option_two}
                                onChange={(e) => this.changeOptionTwo(e)}
                            />
                        </div>
                        <button className="btn" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default connect()(NewQuestion)