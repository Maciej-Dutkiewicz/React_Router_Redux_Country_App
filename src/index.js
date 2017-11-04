import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { getCountries } from './actions/actions-countries';
import store from './store/store';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());
console.log(store.getState());