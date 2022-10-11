import {InitialState} from './types';
import {RootState} from './../../store/index';
import {Columns} from '../../../api/generated';

export const selectAllColumns = (state: RootState): Columns[] =>
  state.columns.columns;
export const selectIsColumnsLoading = (state: RootState): boolean =>
  state.columns.isLoading;
