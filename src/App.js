import './App.css';
import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from './actions/shared';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

const App = (props) => {
	  useEffect(() => {
		  props.dispatch(handleInitialData());
	}, [])

	return <div>
		{
			props.loading === true ? null : <Login />
		}
	</div>;
};

const mapStateToProps = ({authedUser}) => ({
	loading: authedUser === null
})

export default connect()(App);