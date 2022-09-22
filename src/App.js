import './App.css';
import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import { handleInitialData } from './actions/shared';
import { setAuthedUser } from './actions/authedUser';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import LoadingBar from "react-redux-loading-bar";
import Nav from './components/Nav';
import Leaderboard from './components/Leaderboard';
import NewQuestion from './components/NewQuestion';

const App = (props) => {
	useEffect(() => {
		  props.dispatch(handleInitialData());
	}, [])

	const logout = (e) => {
		e.preventDefault();

		props.dispatch(setAuthedUser(''));
	}

	return <div>
		<Fragment>
			<LoadingBar />
			<div className="container">
				{
					props.authedUser.length ? <Nav currentUser={props.currentUser} logout={logout} /> : null
				}
				{
					props.loading ? null :
					<Routes>
						<Route exact path="login" element={<Login />} />
						<Route element={<ProtectedRoute user={props.authedUser} />}>
							<Route exact path="/" element={<Dashboard />} />
							<Route exact path="/leaderboard" element={<Leaderboard />} />
							<Route exact path="/new" element={<NewQuestion />} />
						</Route>
						<Route path="*" className='container' element={<p>There's nothing here: 404!</p>} />
					</Routes>
				}
			</div>
		</Fragment>
	</div>;
};

const mapStateToProps = ({authedUser, users}) => ({
	loading: JSON.stringify(users) === JSON.stringify({}),
	currentUser: users[authedUser],
	authedUser
})

export default connect(mapStateToProps)(App);