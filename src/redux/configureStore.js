import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missionsSlice';
import rocketsReducer from './rockets/rocketsSlice';

// root reducer
const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
}, applyMiddleware(thunk));

export default store;
