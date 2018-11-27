import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import autoBind from 'react-autobind';
import TodoTextInput from './TodoTextInput';

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    markTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
    autoBind(this);
  }

  handleDoubleClick() {
    this.setState({ editing: true })
  }

  handleSave(id, text) {
    this.props.editTodo(id, text);
    this.setState({ editing: false })
  }

  render() {
    const {todo, deleteTodo, markTodo} = this.props;
    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                        editing={this.state.editing}
                        onSave={(text) => this.handleSave(todo.id, text)} />
      );
    } else {
      element = (
        <div className='view'>
          <input className='toggle'
                 type='checkbox'
                 checked={todo.marked}
                 onChange={() => markTodo(todo.id)} />
          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </label>
          <button className='destroy'
                  onClick={() => deleteTodo(todo.id)} />
        </div>
      );
    }
    

    return (
      <li className={classnames({
        completed: todo.marked,
        editing: this.state.editing
      })}>
        {element}
      </li>
    );
  }
}
