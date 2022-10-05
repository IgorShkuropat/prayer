import {AnyAction, Dispatch} from 'redux';
import {signUp, signIn} from '../../ducks/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {http} from '../../../services/http';

export const authMiddleware =
  () =>
  (next: Dispatch) =>
  (action: AnyAction): AnyAction => {
    const storeData = async (key: string, data: string) => {
      try {
        await AsyncStorage.setItem(key, data);
      } catch (error) {}
    };
    if (
      action.type === signUp?.fulfilled?.type &&
      action.type === signIn?.fulfilled?.type
    ) {
      action.payload?.token && storeData('token', action.payload.token);
      action.payload?.token &&
        http.setAuthorizationHeader(action.payload.token);
    }
    return next(action);
  };
