import React from 'react'
import { connect } from 'react-redux'

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todoReducer.todos.map(todo => <p key={todo.id}>{todo.task}</p>)}
        </div>
     )
}

const mapStateToProps = state => {
    return {
        ...state,
        todos: state.todos
    }; 
}

export default connect( mapStateToProps,{} )( TodoList );