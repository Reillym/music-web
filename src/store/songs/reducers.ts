import { combineReducers } from 'redux';
import { FETCH_SONGS_RECEIVED } from './types';
import createReducer from '../utils/createReducer';
import { AppState } from '..';

const byId = createReducer(
  {},
  {
    [FETCH_SONGS_RECEIVED]: (state: any, action: any) => ({
      ...state,
      ...action.payload.entities.songs
    })
  }
);

const allIds = createReducer([], {
  [FETCH_SONGS_RECEIVED]: (state: any, action: any) => [...action.payload.result]
});

const songs = combineReducers({
  byId,
  allIds
});

export const getAllSongs = (state: AppState) =>
  state.songs.allIds.map((id: number) => state.songs.byId[id]);

export const getSongById = (state: AppState, id: number) => state.songs.byId[id];

export default songs;
