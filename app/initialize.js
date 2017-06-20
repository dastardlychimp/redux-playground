import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './rootReducer';
import App from 'components/App';

const store = createStore(rootReducer);

document.addEventListener('DOMContentLoaded', function() {
  console.log('rendering')
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    // <div>1</div>,
    document.querySelector('#app')
  )
})