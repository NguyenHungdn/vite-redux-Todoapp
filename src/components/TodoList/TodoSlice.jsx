const initState = [
   { id: 1, name: 'Learn Yoga', completed: true, priority: 'Medium' },
   { id: 2, name: 'Learn Redux', completed: true, priority: 'High' },
   { id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low' },
   { id: 4, name: 'Learn React JS', completed: false, priority: 'High' },
   { id: 5, name: 'Learn TypeScript', completed: true, priority: 'Low' },
   { id: 6, name: 'Learn NextJS', completed: false, priority: 'Medium' },
];

const todoListsReducer = (state = initState, action) => {
   switch (action.type) {
      case 'todoList/addTodo': {
         return [...state, action.payload];
      }
      case 'todoList/toggleTodoStatus': {
         return state.map((todo) =>
            todo.id === action.payload
               ? { ...todo, completed: !todo.completed }
               : todo,
         );
      }
      default:
         return state;
   }
};
export default todoListsReducer;
