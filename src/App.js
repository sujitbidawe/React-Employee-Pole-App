import './App.css';
import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import { handleInitialData } from './actions/shared';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import LoadingBar from "react-redux-loading-bar";

const App = (props) => {
	useEffect(() => {
		  props.dispatch(handleInitialData());
	}, [])

	return <div>
		<Fragment>
			<LoadingBar />
			<div className="container">
				{
					props.loading ? null :
					<Routes>
						<Route index element={<Login />} />
						<Route exact path="login" element={<Login />} />
						<Route element={<ProtectedRoute user={props.authedUser} />}>
							<Route exact path="dashboard" element={<Dashboard />} />
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
	authedUser
})

export default connect(mapStateToProps)(App);