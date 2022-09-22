import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

const NewQuestion = (props) => {

    const navigate = useNavigate();

    const [optionOneText, setoptionOneText] = useState('');
    const [optionTwoText, setoptionTwoText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        props.dispatch(handleAddQuestion({ optionOneText, optionTwoText }));
        navigate('/');
    }

    return (
        <div className="container">
            <h2>Create new poll</h2>
            <div className="container border-shadow padding-30">
                <h4>Would You Rather...?</h4>
                <input type='text' value={optionOneText} placeholder='Enter first option' onChange={(e) => { setoptionOneText(e.target.value.trim()) }} />
                <input type='text' value={optionTwoText} placeholder='Enter second option' onChange={(e) => { setoptionTwoText(e.target.value.trim()) }} />
                <button className="primary-button mt-5" disabled={optionOneText === '' || optionTwoText === ''} onClick={(e) => { handleSubmit(e) }}>Add Question</button>
            </div>
        </div>
    )
}

export default connect()(NewQuestion);