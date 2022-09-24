import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import reducer from './reducers'
import middleware from "./middleware";
import { createStore } from 'redux';

const store = createStore(reducer, middleware);

test('renders learn react link', () => {
  var view =render(
	<Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
  );
  expect(view).toMatchSnapshot();
});
