import React from 'react'
import {connect} from "react-redux";

class LeaderBoard  extends React.Component{
    render(){

        let users = this.props.users;

        if(users === undefined){
            return <div>Loading...</div>
        }

        let userTOArr = Object.keys(users)
        let mappedData = userTOArr.map(key => {
               let answers = Object.keys(users[key].answers).length;
               let questions = users[key].questions.length
               return{
                   'name': users[key].name,
                   'avatar': users[key].avatarURL,
                   'answered': answers,
                   'questions': questions,
                   'totalScore': questions + answers
               }

           });

        mappedData.sort((a, b) => {
            if (b.totalScore < a.totalScore) return -1;
            if (b.totalScore > a.totalScore) return 1;
            return 0;
        });
        return(
           <div className="container pt-5">
               <div className="row mt-4">
                   <div className="col-lg-7 m-auto">
                       {mappedData.map((user, i) => {
                           return(
                               <div className="boxContainer mb-4" key={`board${user.name}`}>
                                   <div className="d-flex">
                                       <div className="profileImage-holder">
                                           <img src={user.avatar} alt=""/>
                                       </div>
                                       <div className="infoText">
                                           <h2>{user.name}</h2>
                                           <div className="d-flex align-items-center">
                                               <p className="mb-0">Answered questions</p>
                                               <span>{user.answered}</span>
                                           </div>
                                           <div className="d-flex align-items-center mt-1">
                                               <p className="mb-0">Created questions</p>
                                               <span>{user.questions}</span>
                                           </div>
                                       </div>
                                   </div>
                                   <div>
                                       <div className="score">
                                           <h1>Score</h1>
                                           <span>{user.totalScore}</span>
                                       </div>
                                   </div>
                               </div>
                           )
                       })}
                   </div>
               </div>
           </div>
        )
    }
}
function mapStateToProps({users}){
    return{
        users
    }
}
export default connect(mapStateToProps)(LeaderBoard)