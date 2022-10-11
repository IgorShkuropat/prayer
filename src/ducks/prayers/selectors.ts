import {RootState} from './../../store/index';
import {Cards} from '../../../api/generated';

export const selectAllPrayers = (state: RootState): Cards[] => state.prayers;
