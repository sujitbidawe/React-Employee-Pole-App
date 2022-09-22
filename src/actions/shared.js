import { getInitialData } from '../utils/api';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData().then(({users, tweets}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(tweets));
            dispatch(hideLoading());
        })
    }
}