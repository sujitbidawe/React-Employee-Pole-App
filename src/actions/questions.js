import { showLoading, hideLoading } from "react-redux-loading-bar";
import { _saveQuestion } from "../utils/_DATA";
import { addQuestionToUser } from "./users";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(questionObj) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        dispatch(showLoading());

        return _saveQuestion({
            ...questionObj,
            author: authedUser
        })
            .then((question) => {
                dispatch(addQuestion(question))
                dispatch(addQuestionToUser(question))
            })
            .then(() => dispatch(hideLoading()))
    }
}