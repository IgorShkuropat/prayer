import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {Cards, ColumnsDto, CardsDto} from '../../../api/generated';
import {api} from '../../../api';
import {DeletePrayerResponse} from './types';

const initialState: {cards: Cards[]; answeredCards: Cards[]} = {
  cards: [],
  answeredCards: [],
};

export const getAllPrayers = createAsyncThunk<Cards[]>(
  'prayers/getAllPrayers',
  async (_, {rejectWithValue}) => {
    try {
      const response = await api.PrayersApi.cardsControllerFindColumns();
      return response.data as Cards[];
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
export const createPrayer = createAsyncThunk<Cards, CardsDto>(
  'prayers/createPrayer',
  async (payload, {rejectWithValue, dispatch}) => {
    try {
      const response = await api.PrayersApi.cardsControllerCreate(payload);
      await dispatch(getAllPrayers());
      return response.data as Cards;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

// slomaniy type iz api/generated
export const deletePrayer = createAsyncThunk<Cards, number>(
  'prayers/deletePrayer',
  async (prayerId, {rejectWithValue, dispatch}) => {
    try {
      const response = await api.PrayersApi.cardsControllerDelete(prayerId);
      await dispatch(getAllPrayers());
      return response.data as DeletePrayerResponse;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

const prayersSlice = createSlice({
  name: 'prayers',
  initialState,
  reducers: {
    addCardToAnswered(state, action: PayloadAction<number>) {
      const answeredCard = state.cards.find(card => card.id === action.payload);
      if (answeredCard) {
        state.answeredCards.push(answeredCard);
      }
    },
    deleteAnsweredCardsFromCards(state, action: PayloadAction<number>) {
      state.cards = state.cards.filter(card => card.id !== action.payload);
    },
  },
  extraReducers: {
    [getAllPrayers.fulfilled.type]: (state, action: PayloadAction<Cards[]>) => {
      state.cards = action.payload;
    },
  },
});

export const {deleteAnsweredCardsFromCards, addCardToAnswered} =
  prayersSlice.actions;
export default prayersSlice.reducer;
