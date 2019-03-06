import { ADD_TASK, TOGGLE } from "../Actions/TodoActions";

const initialState = {
    todos:[
        {task: 'Make this work', id:Date.now(), completed:false},
    ],
}


export const todoReducer = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case ADD_TASK:
            // console.log("we made it to the case", action.payload);
            const newTask = {
                task: action.payload,
                id: Date.now(),
                completed: false
            };
            return {
                todos: [...state.todos, newTask]
            };
        case TOGGLE:
            return {
                todos: state.todos.map((todo) => {
                    if (todo.id===action.payload) {
                        return {...todo, completed: !todo.completed};
                    } else {
                        return todo;
                    }
                })
            };
        default:
            return state
    }
 
}