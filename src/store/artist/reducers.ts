import { combineReducers } from 'redux';
import { FETCH_ARTISTS_RECEIVED } from './types';
import createReducer from '../utils/createReducer';
import { AppState } from '..';

const byId = createReducer(
  {},
  {
    [FETCH_ARTISTS_RECEIVED]: (state: any, action: any) => ({
      ...state,
      ...action.payload.entities.artists
    })
  }
);

const allIds = createReducer([], {
  [FETCH_ARTISTS_RECEIVED]: (state: any, action: any) => [...action.payload.result]
});

const artists = combineReducers({
  byId,
  allIds
});

export const getAllArtists = (state: AppState) =>
  state.artists.allIds.map((id: number) => state.artists.byId[id]);

export default artists;
