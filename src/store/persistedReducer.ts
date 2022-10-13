import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import auth from '../ducks/auth';
import columns from '../ducks/columns';
import prayers from '../ducks/prayers';
import comments from '../ducks/comments';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};
const rootReducer = combineReducers({
  auth,
  columns,
  prayers,
  comments,
});

export default persistReducer(persistConfig, rootReducer);
