import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {Cards, ColumnsDto} from '../../../api/generated';
import {api} from '../../../api';

const initialState: Cards[] = [];

export const getAllPrayers = createAsyncThunk<Cards[]>(
  'auth/getAllPrayers',
  async (_, {rejectWithValue}) => {
    try {
      const response = await api.PrayersApi.cardsControllerFindColumns();
      return response.data as Cards[];
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

const prayersSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllPrayers.fulfilled.type]: (state, action: PayloadAction<Cards[]>) => {
      state = action.payload;
    },
  },
});

export default prayersSlice.reducer;
