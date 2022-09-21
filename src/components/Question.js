import { connect } from 'react-redux';
import { formatQuestion, formatDate } from '../utils/helpers';

const Question = (props) => {
    if (props.question === null) {
        return <p>This question doesn't exist.</p>
    }

    const { name, id, avatar, timestamp, optionOne, optionTwo, hasReplied } = props.question;

    if ((props.currentTab === 'unanswered' && hasReplied) ||
        (props.currentTab === 'answered' && !hasReplied)) {
        return false;
    }

    return (
        <li className='question-container'>
            <img src={avatar} alt={avatar === null ? '' : `Avatar of ${name}`} className='avatar' />
            <div className='question-info'>
                <div>
                    <span>{name} asks would you rather...</span>
                    <div>{formatDate(timestamp)}</div>
                    <p>{optionOne && optionOne.text}</p>
                    <strong>OR</strong>
                    <p>{optionTwo && optionTwo.text}</p>
                </div>
            </div>
            <button className='primary-button'>Poll</button>
        </li>
    )
}

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
    const question = questions[id];

    return {
        authedUser,
        question: question ? formatQuestion(question, users[question.author], authedUser) : null
    }
}

export default connect(mapStateToProps)(Question);