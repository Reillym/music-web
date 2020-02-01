import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddlware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import artists from './artist/reducers';
import songs from './songs/reducers';
import rootSaga from './sagas';

const rootReducer = combineReducers({
  artists,
  songs
});

export type AppState = ReturnType<typeof rootReducer>;

const sagaMiddlware = createSagaMiddlware();

export default function configureStore() {
  const middlewares = [sagaMiddlware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));

  sagaMiddlware.run(rootSaga);

  return store;
}
