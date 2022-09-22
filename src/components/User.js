const User = ({ user }) => {
    return (
        <li className="user-container">
            <div>
                <img src={user.avatar} alt={user.avatar === null ? '' : `Avatar of ${user.name}`} className='avatar avatar-large' />
            </div>
            <div className="container space-around">
                <strong className="mb-10">{user.name}</strong>
                <div className="container">
                    <span>Polls Answered: <strong>{user.answerCount}</strong></span>
                    <span>Polls Raised: <strong>{user.questionCount}</strong></span>
                </div>
            </div>
            <div>
                <span>Total Count: <strong>{user.totalScore}</strong></span>
            </div>
        </li>
    )
}

export default User;