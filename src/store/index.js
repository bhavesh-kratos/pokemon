import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';

// import watchPokeImages from '../sagas/PokeImages'; 

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(
    rootReducer,
    /* preloadedState, */
    enhancer
  );

//   sagaMiddleware.run(watchPokeImages);

  return store;
};

export default configureStore;
