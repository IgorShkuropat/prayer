import {AnyAction, Dispatch} from 'redux';
import {http} from '../../../services/http';

export const authMiddleware =
  () =>
  (next: Dispatch) =>
  (action: AnyAction): AnyAction => {
    return next(action);
  };
