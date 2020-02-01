import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { normalize } from 'normalizr';

import * as schema from '../schema';
import { FETCH_SONGS_REQUEST } from './types';
import { fetchSongsReceived } from './actions';

function* fetchSongs() {
  try {
    const response = yield call(axios.get, 'http://localhost:3001/songs?_expand=artist');
    const songs = normalize(response.data, schema.songList);
    yield put(fetchSongsReceived(songs));
  } catch (err) {
    yield put(fetchSongsReceived(err));
  }
}

export function* watchFetchSongs() {
  yield takeEvery(FETCH_SONGS_REQUEST, fetchSongs);
}
