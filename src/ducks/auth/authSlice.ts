import {createSlice} from '@reduxjs/toolkit';
import {TInitialState} from './types';
import {AuthSignInDto} from '../../../api/generated';

const initialState: TInitialState = {
  id: null,
  name: null,
  email: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
