import './App.css';
import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import { handleInitialData } from './actions/shared';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

const App = (props) => {
	useEffect(() => {
		  props.dispatch(handleInitialData());
	}, [])

	return <div>
		<Fragment>
			<div className="container">
				{
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

const mapStateToProps = ({authedUser}) => ({
	loading: authedUser === null,
	authedUser
})

export default connect(mapStateToProps)(App);