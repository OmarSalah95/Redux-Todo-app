import React from 'react'

import { connect } from 'react-redux'

import { store } from '../index'
import { addTask } from '../Actions/TodoActions';
class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            todoInput:'' // == my payload
         }
    }

    handleChanges = e => {
        this.setState({
            todoInput: e.target.value
        })
    }

    addTodo =  e  => {
        e.preventDefault()
        // store.dispatch({type:'ADD_TASK', payload:this.state.todoInput})
        this.props.addTask(this.state.todoInput)
        this.setState({
            todoInput: ''
        })
    }

    render() { 
        return ( 
            <>
                <form className="todo-form" onSubmit={e => this.addTodo(e)}>
                    <input 
                        type="text"
                        onChange={e => this.handleChanges(e)}
                        value={this.state.todoInput}
                        placeholder="Add New Task"
                    />
                    <button type='submit' >Add Task</button>
                </form>
            </>
         );
    }
}

export default connect(null, { addTask })(TodoForm);