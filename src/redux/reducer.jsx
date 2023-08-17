import filtersReducer from '../components/Filters/FiltersSlice';
import todoListsReducer from '../components/TodoList/TodoSlice';
import { combineReducers } from 'redux';
// const rootReducer = (state = {}, action) => {
//    return {
//       filters: filtersReducer(state.filters, action),
//       todoList: todoListsReducer(state.todoList, action),
//    };
// };
const rootReducer = combineReducers({
   filters: filtersReducer,
   todoList: todoListsReducer,
});

export default rootReducer;
