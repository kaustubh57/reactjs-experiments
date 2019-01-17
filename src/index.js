import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import myAppReducers from './reducers/TechnologyVotingReducers';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

let store = createStore(
  myAppReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function render() {
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  );
}

store.subscribe(render);

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
