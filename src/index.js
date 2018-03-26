import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { dynamicStoreReducer } from 'wrap-wrap' // импортируем редьюсер в который будут посылаться все экшены wrap-wrap
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(combineReducers({
  dynamic: dynamicStoreReducer // добавляем наш редьюсер в к остальным редьюсерам, ключ долже быть обязательно dynamic
}))

ReactDOM.render( // тут все как в обычном react-redux приложении
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
