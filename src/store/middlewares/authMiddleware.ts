import {AnyAction, Dispatch} from 'redux';
import {REHYDRATE} from 'redux-persist';
import {signUp, signIn} from '../../ducks/auth';
import {http} from '../../../services/http';
export const authMiddleware =
  () =>
  (next: Dispatch) =>
  (action: AnyAction): AnyAction => {
    console.log(action);
    if (
      action.type === signUp?.fulfilled?.type ||
      action.type === signIn?.fulfilled?.type
    ) {
      action.payload?.token &&
        http.setAuthorizationHeader(action.payload.token);
    }

    if (action.type === REHYDRATE) {
      const token = action.payload?.auth?.token;
      token && http.setAuthorizationHeader(token);
    }
    return next(action);
  };
