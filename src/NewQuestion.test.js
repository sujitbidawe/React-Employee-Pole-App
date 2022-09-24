import { render, fireEvent, screen } from '@testing-library/react';
import NewQuestion from './components/NewQuestion';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import reducer from './reducers'
import middleware from "./middleware";
import { createStore } from 'redux';

const store = createStore(reducer, middleware);

test('when input-one, input-two have no value then submit button is disabled', () => {
    render(
        <Provider store={store}>
            <Router>
                <NewQuestion />
            </Router>
        </Provider>
    );

    let inputOne = screen.getByPlaceholderText('Enter first option');
    let inputTwo = screen.getByPlaceholderText('Enter second option');
    let submitButton = screen.queryByTestId('submit-button');
    expect(inputOne.value).toBe('');
    expect(inputTwo.value).toBe('');
    expect(submitButton.disabled).toBeTruthy();
});

test('when input-one is given to input field it correctly changes and displays updated value', () => {
    render(
        <Provider store={store}>
            <Router>
                <NewQuestion />
            </Router>
        </Provider>
    );

    let ele = screen.getByPlaceholderText('Enter first option');

    fireEvent.change(ele, {
        target: { value: "OPTION1" }
    });

    expect(screen.queryByTestId('input-one').value).toBe('OPTION1')
});

test('when input-two is given to input field it correctly changes and displays updated value', () => {
    render(
        <Provider store={store}>
            <Router>
                <NewQuestion />
            </Router>
        </Provider>
    );

    let ele = screen.getByPlaceholderText('Enter second option');

    fireEvent.change(ele, {
        target: { value: "OPTION2" }
    });

    expect(screen.queryByTestId('input-two').value).toBe('OPTION2')
});

