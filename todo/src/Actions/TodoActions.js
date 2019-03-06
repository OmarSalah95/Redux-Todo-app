export const ADD_TASK = 'ADD_TASK';
export const TOGGLE = 'TOGGLE';

export const addTask = task => ({
    type: ADD_TASK,
    payload: task
  })

  export const toggleTask = (id) => {
    console.log(id);
    return {
      type: TOGGLE,
      payload: id}
  }
