import { showLoading, hideLoading } from "react-redux-loading-bar";
import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { addQuestionToUser, addAnswerToUser } from "./users";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';

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

export function addAnswer(answer) {
    return {
        type: ADD_ANSWER,
        answer
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

export function handleAddAnswer(answerObj) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        dispatch(showLoading());

        const dataObj = {
            authedUser,
            qid: answerObj.id,
            answer: answerObj.optionSelected
        }

        return _saveQuestionAnswer(dataObj)
            .then((answer) => {
                dispatch(addAnswer(dataObj))
                dispatch(addAnswerToUser(dataObj))
            })
            .then(() => dispatch(hideLoading()))
    }
}