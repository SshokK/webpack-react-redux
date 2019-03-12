import { 
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR
} from '../actions'

const initialState = {
  todoData: {
    todos: [],
    errors: [],
    page: 1,
    currentViewOption: { key: 10, name: "10" }
  }
}

const createTodoList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_BEGIN:
      return {
        ...state,
        todoData: {
          ...state.todoData || initialState.todoData
        }
      }
    case FETCH_DATA_SUCCESS: 
      return {
        ...state,
        todoData: {
          ...state.todoData,
          page: action.page || initialState.todoData.page,
          todos: action.data,
          currentViewOption: action.currentViewOption || initialState.todoData.currentViewOption
        }
      }
    case FETCH_DATA_ERROR:
      return {
        ...state,
        todoData: {
          ...state.todoData,
          errors: action.error
        }
      }
    default:
      return state
  }
}

export default createTodoList