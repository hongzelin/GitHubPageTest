import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import promise from 'redux-promise-middleware';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducers';

import configureStore from './store/configureStore';

import { Provider } from 'react-redux';

// const logger = store => next => action => {
//   console.log('dispatching', action);
//   let result = next(action);
//   console.log('next state', store.getState());
//   return result;
// };

// const error = store => next => action => {
//   try {
//     next(action)
//   } catch (e) {
//     console.log('error ' + e);
//   }
// };

// const logger = function(store) {
//   return function(next) {
//     return function(action) {
//       console.log('dispatching', action);
//       let result = next(action);
//       console.log('next state', store.getState());
//       return result;
//     }
//   }
// }

const store = configureStore();
// const store = createStore(rootReducer, {}, applyMiddleware(logger, thunk, promise()));
// const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(logger, thunk, promise())));
// store.subscribe(() => console.log("State updated!", store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  })
}

registerServiceWorker();