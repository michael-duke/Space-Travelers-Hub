import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import UserProfile from '../components/UserProfile';

describe('Test for UserProfile component', () => {
  test('Renders UserProfile correctly', () => {
    const userProfile = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <UserProfile />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(userProfile).toMatchSnapshot();
  });

  test('Check for heading \'My Missions\' on the UserProfile component is in the rendered document', () => {
    render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <UserProfile />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(
      screen.getByRole('heading', { name: /My Missions/i }),
    ).toBeInTheDocument();
  });

  test('Check for heading \'My Rockets\' on the UserProfile component is in the rendered document', () => {
    render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <UserProfile />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(
      screen.getByRole('heading', { name: /My Rockets/i }),
    ).toBeInTheDocument();
  });
});
