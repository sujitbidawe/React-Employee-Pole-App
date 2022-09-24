import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const PollResult = (props) => {

    let { id } = useParams();

    const resultDataObj = {
        authorId: props.questions[id].author,
        authorName: props.users[props.questions[id].author].name,
        authorAvatar: props.users[props.questions[id].author].avatarURL,
        optionOne: props.questions[id].optionOne,
        optionTwo: props.questions[id].optionTwo,
        totalVotes: props.questions[id].optionOne.votes.length + props.questions[id].optionTwo.votes.length,
        myVote: props.users[props.authedUser].answers[id]
    }

    const calculatePercentage = (count, totalCount) => {
        if (totalCount !== 0) {
            return Math.round((count / totalCount) * 100);
        }
        return 'NA';
    }

    return (
        <div className='question-container mt-60'>
            <img src={resultDataObj.authorAvatar} alt={resultDataObj.authorAvatar === null ? '' : `Avatar of ${resultDataObj.authorName}`} className='avatar avatar-large' />
            <div className='question-info'>
                <h3 className="m-5 mb-10">Poll Result:</h3>
                <h4 className="m-5 mb-10">{resultDataObj.authorName} asked...</h4>
                <div className="container">
                    <div className="container row flex-start align-center mb-10"><label>Would you rather?</label></div>
                    <div className="container flex-start align-center mb-10 border-shadow p-10 min-width-350">
                        <label><strong>{resultDataObj.optionOne.votes.length} {`(`}{calculatePercentage(resultDataObj.optionOne.votes.length, resultDataObj.totalVotes)}{`%)`} </strong>employees voted for:</label>
                        <label><strong>{resultDataObj.optionOne.text}</strong></label>
                        {resultDataObj.myVote === 'optionOne' ?
                            <strong>***YOUR VOTE***</strong> : null
                        }
                    </div>
                    <div className="container flex-start align-center border-shadow p-10 min-width-350">
                        <label><strong>{resultDataObj.optionTwo.votes.length} {`(`}{calculatePercentage(resultDataObj.optionTwo.votes.length, resultDataObj.totalVotes)}{`%)`} </strong>employees voted for: </label>
                        <label><strong>{resultDataObj.optionTwo.text}</strong></label>
                        {resultDataObj.myVote === 'optionTwo' ?
                            <label className="vote"><strong>***YOUR VOTE***</strong></label> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ authedUser, users, questions }) => {
    return {
        authedUser,
        users,
        questions
    }
}

export default connect(mapStateToProps)(PollResult);