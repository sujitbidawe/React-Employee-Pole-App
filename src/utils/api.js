import {
    _getUsers,
    _getQuestions,
} from './_DATA.js'
  
export function getInitialData () {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, tweets]) => ({
        users,
        tweets,
    }))
}