import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {combineReducers, createStore} from 'redux';
import technologyVotingReducers from './reducers/TechnologyVotingReducers';
import rxJSSimpleExampleReducers from './reducers/RxJSSimpleExampleReducers';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  technologyVote: technologyVotingReducers,
  rxJSSimpleExampleData: rxJSSimpleExampleReducers
});

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function render() {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

store.subscribe(render);

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
