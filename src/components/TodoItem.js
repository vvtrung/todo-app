import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import autoBind from 'react-autobind';

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
    autoBind(this);
  }

  render() {
    const {todo, deleteTodo} = this.props;
    let element = (
      <div className='view'>
        <input className='toggle' type='checkbox' />
        <label>
          {todo.text}
        </label>
        <button className='destroy'
                onClick={() => deleteTodo(todo.id)} />
      </div>
    );

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
