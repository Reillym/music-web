import { FETCH_SONGS_REQUEST, FETCH_SONGS_RECEIVED, FETCH_SONGS_FAILED } from './types';

export const fetchSongsRequest = () =>
  ({
    type: FETCH_SONGS_REQUEST
  } as const);

export const fetchSongsReceived = (songs: any) =>
  ({
    type: FETCH_SONGS_RECEIVED,
    payload: songs
  } as const);

export const fetchSongsFailed = (error: any) =>
  ({
    type: FETCH_SONGS_FAILED,
    payload: error
  } as const);

export type Actions = ReturnType<
  typeof fetchSongsRequest | typeof fetchSongsReceived | typeof fetchSongsFailed
>;
