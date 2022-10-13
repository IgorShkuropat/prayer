import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {Comments, CommentsDto} from '../../../api/generated';
import {api} from '../../../api';
import {deletePrayer} from '../prayers/prayersSlice';
import {DeletePrayerResponse} from '../prayers/types';

const initialState: Comments[] = [];

export const getAllComments = createAsyncThunk<Comments[]>(
  'comments/getAllComments',
  async (_, {rejectWithValue}) => {
    try {
      const response = await api.CommentsApi.commentsControllerFindColumns();
      return response.data as Comments[];
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
export const addComment = createAsyncThunk<Comments, CommentsDto>(
  'comments/addComment',
  async (payload, {rejectWithValue, dispatch}) => {
    try {
      const response = await api.CommentsApi.commentsControllerCreate(payload);
      dispatch(getAllComments());
      return response.data as Comments;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
export const deleteComment = createAsyncThunk<Comments[], number>(
  'comments/deleteComment',
  async (commentId, {rejectWithValue}) => {
    try {
      const response = await api.CommentsApi.commentsControllerDelete(
        commentId,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllComments.fulfilled.type]: (
      state,
      action: PayloadAction<Comments[]>,
    ) => {
      return action.payload;
    },
    [deletePrayer.fulfilled.type]: (
      state,
      action: PayloadAction<DeletePrayerResponse>,
    ) => {
      return state.filter(
        comment => !action.payload.commentsIds.includes(comment.id),
      );
    },
    [deleteComment.fulfilled.type]: (
      state,
      action: PayloadAction<{commentId: number}>,
    ) => {
      return state.filter(comment => action.payload.commentId !== comment.id);
    },
  },
});

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;
