import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

// Actions
const GET_DRAGONS = 'GET_DRAGONS';

const initialState = {
  dragons: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  message: null,
};

// Thunks
export const getDragons = createAsyncThunk(GET_DRAGONS, async () => {
  try {
    return await api.fetchDragons();
  } catch (error) {
    return error.message;
  }
});

// Reducer
const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDragons.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getDragons.fulfilled, (state, action) => ({
        ...state,
        dragons: action.payload,
        status: 'succeeded',
      }))
      .addCase(getDragons.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const allDragons = (state) => state.dragons.dragons;
export const allStatus = (state) => state.dragons.status;
export const allMessages = (state) => state.dragons.message;

export default dragonsSlice.reducer;
