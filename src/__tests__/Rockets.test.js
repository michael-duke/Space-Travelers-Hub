import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import RocketsContainer from '../components/RocketsContainer';

describe('Rockets Container component', () => {
  test('Renders Rockets correctly', () => {
    const rockets = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <RocketsContainer />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(rockets).toMatchSnapshot();
  });
});
