export const ADD_TASK = 'ADD_TASK';
export const TOGGLE = 'TOGGLE';
export const DELETE = 'DELETE';

export const addTask = task => ({
    type: ADD_TASK,
    payload: task
  })

  export const toggleTask = (id) => ({
      type: TOGGLE,
      payload: id
  })

  export const deleteTask = (id) => {
    console.log('in action Creator');
  return {
    type: 'DELETE',
    payload: id
  }
}
