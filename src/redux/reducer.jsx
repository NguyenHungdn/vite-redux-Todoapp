import filtersReducer from '../components/Filters/FiltersSlice';
import todoListsReducer from '../components/TodoList/TodoSlice';

const rootReducer = (state = {}, action) => {
   return {
      filters: filtersReducer(state.filters, action),
      todoList: todoListsReducer(state.todoList, action),
   };
};
export default rootReducer;
