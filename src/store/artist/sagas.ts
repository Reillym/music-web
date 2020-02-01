import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { normalize } from 'normalizr';

import * as schema from '../schema';
import { FETCH_ARTISTS_REQUEST } from './types';
import { fetchArtistsReceived, fetchArtistsFailed } from './actions';

function* fetchArtists() {
  try {
    const response = yield call(axios.get, 'http://localhost:3001/artists');
    const artists = normalize(response.data, schema.artistList);
    yield put(fetchArtistsReceived(artists));
  } catch (err) {
    yield put(fetchArtistsFailed(err));
  }
}

export function* watchFetchArtists() {
  yield takeEvery(FETCH_ARTISTS_REQUEST, fetchArtists);
}
