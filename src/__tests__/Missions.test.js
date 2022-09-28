import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import MissionsContainer from '../components/MissionsContainer';

describe('Mission Container component', () => {
  test('Renders Missions correctly', () => {
    const missions = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <MissionsContainer />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(missions).toMatchSnapshot();
  });
});
