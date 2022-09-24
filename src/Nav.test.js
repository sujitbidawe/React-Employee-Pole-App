import { render, screen } from '@testing-library/react';
import Nav from './components/Nav';
import { BrowserRouter as Router } from "react-router-dom";

test('Nav component has three nav links', () => {
    const logoutMock = {};
    render(
        <Router>
            <Nav currentUser='tester' logout={logoutMock} />
        </Router>
    );

    let navLinks = screen.queryAllByTestId('nav-link');
    
    expect(navLinks.length).toBe(3);
});
