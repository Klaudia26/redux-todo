import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo, checkboxTodo } from './action';
import './App.css';

class App extends Component {
  state = {
    todo: '',
  };

  handleChange = (e) => {
    this.setState({
      todo: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const todoSingle = {
      id: new Date(),
      checked: false,
      text: this.state.todo,
    };
    this.props.addTodo(todoSingle);
    this.setState({
      todo: '',
    });
  };

  handleDelete = (id) => {
    this.props.removeTodo(id);
  };

  handleChcebox = (id) => {
    this.props.checkboxTodo(id);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.todo}
            className="input-todo"
          />
          <button className="btn-add">Add</button>
        </form>
        <div className="todos-list">
          {this.props.todo.map((todo) => {
            return (
              <div className="todo">
                <p key={todo.id} className="paragraph-todo">
                  {todo.text}
                </p>
                <p className="paragraph-delete">
                  <button
                    onClick={() => this.handleDelete(todo.id)}
                    className="btn-delete"
                  >
                    delete
                  </button>
                  <input
                    type="checkbox"
                    checked={todo.checked}
                    onChange={() => this.handleChcebox(todo.id)}
                  />
                </p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    removeTodo: (id) => dispatch(removeTodo(id)),
    checkboxTodo: (id) => dispatch(checkboxTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
