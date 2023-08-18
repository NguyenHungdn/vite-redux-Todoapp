// import { createStore } from 'redux';
// import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(rootReducer, composeWithDevTools());
// export default store;

import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from '../components/Filters/filtersSlice';
import todoListsReducer from '../components/TodoList/TodoSlice';
const store = configureStore({
   reducer: {
      filters: filtersReducer,
      todoList: todoListsReducer,
   },
});
export default store;
