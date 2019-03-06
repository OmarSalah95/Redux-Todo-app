import React from 'react'
import { connect } from 'react-redux'
import { toggleTask } from '../Actions/TodoActions';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todoReducer.todos.map(todo => 
            <p className={todo.completed ? 'complete' : ''} onClick={() => props.toggleTask(todo.id)} key={todo.id}>{todo.task}</p>
            )}
        </div>
     )
}

const mapStateToProps = state => {
    return {
        ...state,
        todos: state.todos
    }; 
}

export default connect( mapStateToProps, {toggleTask} )( TodoList );