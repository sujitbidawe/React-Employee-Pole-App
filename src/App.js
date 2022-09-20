import './App.css';
import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from './actions/shared';
import Dashboard from './components/Dashboard';

const App = (props) => {
	  useEffect(() => {
		  props.dispatch(handleInitialData());
	}, [])

	return <div>
		{
			props.loading === true ? null : <Dashboard />
		}
	</div>;
};

const mapStateToProps = ({authedUser}) => ({
	loading: authedUser === null
})

export default connect()(App);