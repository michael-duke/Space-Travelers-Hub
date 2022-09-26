import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

// Actions
const GET_MISSIONS = 'GET_MISSIONS';

const initialState = {
  missions: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  message: null,
};

// Thunks
export const getMissions = createAsyncThunk(GET_MISSIONS, async () => {
  try {
    return await api.fetchMissions();
  } catch (error) {
    return error.message;
  }
});

// Reducer
const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getMissions.fulfilled, (state, action) => ({
        ...state,
        missions: action.payload,
        status: 'succeeded',
      }))
      .addCase(getMissions.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const allMissions = (state) => state.missions.missions;
export const allStatus = (state) => state.missions.status;
export const allMesssages = (state) => state.missions.message;

export default missionsSlice.reducer;
