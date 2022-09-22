import { NavLink } from "react-router-dom";

const Nav = ({ currentUser, logout }) => {

    return (
        <div className="nav">
            <div>
                <NavLink to='/' end className='nav-link'>Home</NavLink>
                <NavLink to='/leaderboard' end className='nav-link'>Leaderboard</NavLink>
                <NavLink to='/add' end className='nav-link'>New Question</NavLink>
            </div>
            <div>
                <span>
                    Welcome, <strong>{currentUser.name}!</strong>
                </span>
                <button type="submit" className="nav-link" onClick={(e) => logout(e)}>Logout</button>
            </div>
        </div>
    )
}

export default Nav;