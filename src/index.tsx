import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import createSaga from 'redux-saga';
import { rootReducer } from './store/reducers/rootReducer';
import { watchLoadClothes } from './saga/sagas';

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const saga = createSaga();

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(
  reduxThunk,
  saga
)));

saga.run(watchLoadClothes);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
