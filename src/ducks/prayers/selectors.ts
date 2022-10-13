import {RootState} from './../../store/index';
import {Cards} from '../../../api/generated';
import {createSelector} from '@reduxjs/toolkit';

export const selectAllPrayers = (state: RootState): Cards[] =>
  state.prayers.cards;

export const selectAttachedPrayers = (columnId: number) =>
  createSelector(selectAllPrayers, prayers =>
    prayers.filter(prayer => prayer.columnId === columnId),
  );

export const selectAnsweredPrayers = (state: RootState): Cards[] =>
  state.prayers.answeredCards;
