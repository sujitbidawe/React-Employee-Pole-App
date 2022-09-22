import { useState } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

const Login = (props) => {

    const { dispatch } = props;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const changeUsername = (username) => {
        setUsername(username);
    }

    const changePassword = (pwd) => {
        setPassword(pwd);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = props.users[username];
        if (user && (user.password === password)) {
            dispatch(setAuthedUser(user.id));
        }
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <div className="login-input-container">
                <input type='text' value={username} placeholder='username' onChange={(e) => { changeUsername(e.target.value) }} />
                <input type='password' value={password} placeholder='password' onChange={(e) => { changePassword(e.target.value) }} />
            </div>
            <button type="submit" className="primary-button" disabled={username === '' || password === ''} onClick={(e) => handleSubmit(e)}>Login</button>
        </div>
    )
}

const mapStateToProps = ({ users }) => ({
    users
})

export default connect(mapStateToProps)(Login);