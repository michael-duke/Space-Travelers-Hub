import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

// Actions
const GET_ROCKETS = 'GET_ROCKETS';

const initialState = {
  rockets: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  msg: null,
};

export const getRockets = createAsyncThunk(GET_ROCKETS, async () => {
  try {
    return await api.fetchRockets();
  } catch (error) {
    return error.message;
  }
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getRockets.fulfilled, (state, action) => ({
        ...state,
        rockets: action.payload,
        status: 'succeeded',
      }))
      .addCase(getRockets.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const allRockets = (state) => state.rockets.rockets;
export const allStatus = (state) => state.rockets.status;
export const allMsgs = (state) => state.rockets.msg;

export default rocketsSlice.reducer;
