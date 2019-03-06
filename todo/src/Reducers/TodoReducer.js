import { ADD_TASK } from "../Actions/TodoActions";

const initialState = {
    todos:[
        {task: 'Make this work', id:Date.now(), completed:false},
    ],
}


export const todoReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case ADD_TASK:
            console.log("we made it to the case", action.payload);
            const newTask = {
                task: action.payload,
                id: Date.now(),
                completed: false
            };
            return {
                todos: [...state.todos, newTask]
            };
        default:
            return state
    }
 
}