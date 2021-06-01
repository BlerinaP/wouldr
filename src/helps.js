export function formatQuestion (question, user, authedUser) {
    const {id, optionOne, optionTwo ,timestamp} = question;
    const {name, avatarURL} = user;
    return {
        name,
        id,
        optionTwo,
        optionOne,
        timestamp,
        avatarURL,
        voted: optionOne.votes.length > 0 || optionTwo.votes.length > 0
    }
}