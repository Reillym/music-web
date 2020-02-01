import { FETCH_ARTISTS_REQUEST, FETCH_ARTISTS_RECEIVED, FETCH_ARTISTS_FAILED } from './types';

export const fetchArtistsRequest = () =>
  ({
    type: FETCH_ARTISTS_REQUEST
  } as const);

export const fetchArtistsReceived = (artists: any) =>
  ({
    type: FETCH_ARTISTS_RECEIVED,
    payload: artists
  } as const);

export const fetchArtistsFailed = (error: any) =>
  ({
    type: FETCH_ARTISTS_FAILED,
    payload: error
  } as const);

export type Actions = ReturnType<
  typeof fetchArtistsRequest | typeof fetchArtistsReceived | typeof fetchArtistsFailed
>;
