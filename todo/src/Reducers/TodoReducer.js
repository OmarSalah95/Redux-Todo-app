import { ADD_TASK, TOGGLE, DELETE } from "../Actions/index";

const initialState = {
    todos:[],
}


export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
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
            case 'DELETE':
            console.log('In reducer');
            return {
                todos: state.todos.filter((todo) => {
                    if (todo.id !== action.payload) {
                        return {...todo};
                    } 
                })
            };
        default:
            return state
    }
 
}




