import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { RadioGroup, Radio } from 'react-radio-group';
import { handleAddAnswer } from "../actions/questions";
import PagenotFound from "./Pagenotfound";

const PollForm = (props) => {
    let { id } = useParams();
    const navigate = useNavigate();

    const [continueRendering, setContinueRendering] = useState(false);
    const [optionSelected, setOptionSelected] = useState('');

    useEffect(() => {
        if (props.questions[id]) {
            setContinueRendering(true)
        }
    }, [])

    if (!continueRendering) {
        return <PagenotFound />
    }

    const questionDataObj = {
        authorId: props.questions[id].author,
        authorName: props.users[props.questions[id].author].name,
        authorAvatar: props.users[props.questions[id].author].avatarURL,
        optionOne: props.questions[id].optionOne,
        optionTwo: props.questions[id].optionTwo
    }

    const handleInput = (value) => {
        setOptionSelected(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.dispatch(handleAddAnswer({ optionSelected, id }));
        navigate(`/question/${id}/result`);
    }

    return (
        <div className='question-container mt-60'>
            <img src={questionDataObj.authorAvatar} alt={questionDataObj.authorAvatar === null ? '' : `Avatar of ${questionDataObj.authorName}`} className='avatar avatar-large' />
            <div className='question-info'>
                <h4 className="m-5 mb-10">{questionDataObj.authorName} asks would you rather...</h4>
                <div className="container row">
                    <RadioGroup name="selectedOption" selectedValue={optionSelected} onChange={handleInput}>
                        <div className="container row flex-start align-center mb-10"><Radio className="radio-input" value='optionOne' /><label>{questionDataObj.optionOne.text}</label></div>
                        <div className="container row flex-start align-center"><Radio className="radio-input" value='optionTwo' /><label>{questionDataObj.optionTwo.text}</label></div>
                    </RadioGroup>
                    <button type="submit" className="primary-button" disabled={optionSelected === ''} onClick={(e) => handleSubmit(e)}>Submit</button>
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

export default connect(mapStateToProps)(PollForm);