export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    payload: todo,
  };
};

export const removeTodo = (id) => {
  return {
    type: 'REMOVE__TODO',
    payload: id,
  };
};

export const checkboxTodo = (id) => {
  return {
    type: 'CHECKBOX__TODO',
    payload: id,
  };
};
