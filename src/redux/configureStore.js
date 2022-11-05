import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missionsSlice';
import rocketsReducer from './rockets/rocketsSlice';
import dragonsReducer from './dragons/dragonsSlice';

// root Reducer
const rootReducer = combineReducers({
  missions: missionsReducer,
  rockets: rocketsReducer,
  dragons: dragonsReducer,
});

// Redux store
const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(thunk),
);

export default store;
