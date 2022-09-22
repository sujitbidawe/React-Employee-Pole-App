import { connect } from "react-redux";
import User from "./User";

const Leaderboard = (props) => {

    const modifyUsers = (users) => {
        const usersData = Object.keys(users).map(function (key) {
            return {
                id: key,
                name: users[key].name,
                totalScore: Object.keys(users[key].answers).length + users[key].questions.length,
                answerCount: Object.keys(users[key].answers).length,
                questionCount: users[key].questions.length,
                avatar: users[key].avatarURL
            }
        })

        return sortUsers(usersData);
    }

    const sortUsers = (users) => {
        const sortedUsers = users.sort(
            (a, b) => b.totalScore - a.totalScore
        )

        return sortedUsers;
    }

    return (
        <div className="container">
            <h2>Leaderboard</h2>
            <ul className="dashboard-list">
                {
                    modifyUsers(props.users).map((user) => (
                        <User key={user.id} user={user} />
                    ))
                }
            </ul>
        </div>
    )
}

const mapStateToProps = ({ users }) => ({
    users
});

export default connect(mapStateToProps)(Leaderboard);