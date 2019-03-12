import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import TodoList from './js/components/TodoList/TodoList'
import { createStore, applyMiddleware } from 'redux'
import TodoContainer from './js/containers/TodoContainer/TodoContainer'
import createTodoList from './js/reducers/rootReducer'
import thunkMiddleware from 'redux-thunk'

const store = createStore(createTodoList, applyMiddleware(thunkMiddleware));
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>    
    <TodoContainer/>    
  </Provider>, rootElement
);