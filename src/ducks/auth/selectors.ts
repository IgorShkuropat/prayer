import {RootState} from './../../store/index';

export const selectUsername = (state: RootState): string | null =>
  state.auth.name;
export const selectUserEmail = (state: RootState): string | null =>
  state.auth.email;
export const selectUserId = (state: RootState): number | null => state.auth.id;
