const initState = {
   search: '', // giá trị input để filter
   status: 'All', // trạng thái hiện tại của todo gồm All - Completed -To do
   priority: [], //  độ ưu tiên
};
const filtersReducer = (state = initState, action) => {
   switch (action.type) {
      case 'filters/searchFilterChange': {
         return { ...state, search: action.payload };
      }
      case 'filters/statusFilterChange': {
         return { ...state, status: action.payload };
      }
      case 'filters/priorityFilterChange': {
         return { ...state, priority: action.payload };
      }
      default:
         return state;
   }
};

export default filtersReducer;
