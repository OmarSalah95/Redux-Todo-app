import React from 'react'
import { connect } from 'react-redux'
import { toggleTask, deleteTask } from '../Actions/index';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todoReducer.todos.length ? props.todoReducer.todos.map(todo => 
            <>
                <p 
                    className={todo.completed ? 'complete' : 'task'} 
                    onClick={() => props.toggleTask(todo.id)} 
                    key={todo.id}
                >
                {todo.task}
                </p>
                <button 
                    onClick={() => props.deleteTask(todo.id)}
                >
                    Delete
                </button></>) : <h2>Please Add Tasks</h2>}
        </div>
     )
}

const mapStateToProps = state => {
    return {
        ...state,
        todos: state.todos
    }; 
}

export default connect( mapStateToProps, {toggleTask, deleteTask} )( TodoList );