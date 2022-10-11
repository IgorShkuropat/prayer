import {InitialState} from './types';
import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {Columns, ColumnsDto} from '../../../api/generated';
import {api} from '../../../api';

const initialState: InitialState = {
  columns: [],
  isLoading: false,
};

export const getAllColumns = createAsyncThunk<Columns[]>(
  'auth/getAllColumns',
  async (_, {rejectWithValue}) => {
    try {
      const response = await api.ColumnsApi.columnsControllerFindColumns();
      return response.data as Columns[];
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
export const createColumn = createAsyncThunk<
  Columns,
  Omit<ColumnsDto, 'prayerId'>
>('auth/createColumn', async (payload, {rejectWithValue}) => {
  try {
    const response = await api.ColumnsApi.columnsControllerCreate(
      payload as ColumnsDto,
    );
    return response.data as Columns;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllColumns.fulfilled.type]: (
      state,
      action: PayloadAction<Columns[]>,
    ) => {
      state.columns = action.payload;
    },
    [createColumn.pending.type]: state => {
      state.isLoading = true;
    },
    [createColumn.fulfilled.type]: (state, action: PayloadAction<Columns>) => {
      state.columns.push(action.payload);
      state.isLoading = false;
    },
    [createColumn.rejected.type]: state => {
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;
