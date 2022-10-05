import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {TInitialState} from './types';
import {AuthSignInDto, AuthSignUpDto, Users} from '../../../api/generated';
import {api} from '../../../api';

const initialState: TInitialState = {
  id: null,
  name: null,
  email: null,
};
export const signUp = createAsyncThunk<Users, AuthSignUpDto>(
  'auth/signUp',
  async (payload, {rejectWithValue}) => {
    try {
      const response = await api.AuthenticationApi.authControllerSignUp(
        payload,
      );
      return response.data as Users;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
export const signIn = createAsyncThunk<Users, AuthSignInDto>(
  'auth/signIn',
  async (payload, {rejectWithValue}) => {
    try {
      const response = await api.AuthenticationApi.authControllerSignIn(
        payload,
      );
      return response.data as Users;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [signUp.fulfilled.type]: (state, action: PayloadAction<Users>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
  },
});

export default authSlice.reducer;
