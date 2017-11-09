import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';

const middleware = applyMiddleware(thunk, promise());

export default createStore(reducers, {
  posts: {
    post: []
  }
}, middleware);
