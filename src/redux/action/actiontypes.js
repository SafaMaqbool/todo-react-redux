import { ADD_TODO, FILTER_TODO, MARK_ALL_COMPLETED_TODO, MARK_COMPLETED_TODO, MARK_INCOMPLETE_TODO, REMOVE_TODO, SEARCH_TODO, TOGGLE_TODO } from "./actions";


//in action fuction we always pass two things one is the type the other is the data
export const addTodo=(text)=>({
    type:ADD_TODO,
    payload: {text}
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const markCompleted = (id) => ({
  type: MARK_COMPLETED_TODO,
  payload: { id },
});

export const markInCompleted = (id) => ({
  type: MARK_INCOMPLETE_TODO,
  payload: { id },
});

export const filterTodo = (filter) => ({
  type: FILTER_TODO,
  payload: { filter },
});

export const updateSearchTodo = (search) => ({
  type: SEARCH_TODO,
  payload: { search },
});

export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED_TODO,
  
});