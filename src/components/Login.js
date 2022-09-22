import { useState } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";

const Login = (props) => {

    const navigate = useNavigate();
    const { dispatch } = props;

    const [user, setUser] = useState('');

    const changeUser = (e) => {
        setUser(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (user) {
            dispatch(setAuthedUser(user))
            navigate('/dashboard');
        }
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <select
                onChange={(e) => changeUser(e.target.value)}>
                <option value=''>Select User</option>
                {
                    Object.keys(props.users).map((user) => {
                        return (
                            <option
                                key={props.users[user].id}
                                value={props.users[user].id}
                            >
                                {props.users[user].name}
                            </option>
                        )
                    })
                }
            </select>
            <button type="submit" className="primary-button" disabled={user === ''} onClick={(e) => handleSubmit(e)}>Login</button>
        </div>
    )
}

const mapStateToProps = ({ users }) => ({
    users
})

export default connect(mapStateToProps)(Login);