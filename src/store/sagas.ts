import { all, take } from 'redux-saga/effects';
import { watchFetchArtists } from './artist/sagas';
import { watchFetchSongs } from './songs/sagas';

function* logger() {
  while (true) {
    const action = yield take('*');
    console.log(action);
  }
}

export default function* rootSaga() {
  yield all([watchFetchArtists(), watchFetchSongs(), logger()]);
}
