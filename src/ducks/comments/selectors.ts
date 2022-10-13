import {RootState} from '../../store';
import {Comments} from '../../../api/generated';
import {createSelector} from '@reduxjs/toolkit';

export const selectAllComments = (state: RootState): Comments[] =>
  state.comments;

export const selectAttachedComments = (prayerId: number) =>
  createSelector(selectAllComments, comment =>
    comment.filter(comment => comment.prayerId === prayerId),
  );
