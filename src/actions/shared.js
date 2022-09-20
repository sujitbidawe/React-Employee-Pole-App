import { getInitialData } from '../utils/api';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';
import { setAuthedUser } from './authedUser';

const AUTHED_ID = 'sarahedo';

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({users, tweets}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(tweets));
            dispatch(setAuthedUser(AUTHED_ID));
        })
    }
}