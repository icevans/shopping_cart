import React from 'react';
import ReactDOM from 'react-dom';
import Shop from './components/Shop';
import store from './lib/store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Shop />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
