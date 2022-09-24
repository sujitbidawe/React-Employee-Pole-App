import { render, fireEvent, screen } from '@testing-library/react';
import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import reducer from './reducers'
import middleware from "./middleware";
import { createStore } from 'redux';

const store = createStore(reducer, middleware);

test('when clicked on "Show Answered Questions"; the text is changed to "Show Unanswered Questions', () => {
	render(
		<Provider store={store}>
			<Router>
				<Dashboard url="/"/>
			</Router>
		</Provider>
	);

	fireEvent.click(screen.getByText('Show Answered Questions'))
	expect(screen.queryByText('Show Answered Questions')).toBeFalsy();
});
