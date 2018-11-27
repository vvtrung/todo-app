import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import autoBind from 'react-autobind';

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
    autoBind(this);
  }

  render() {
    const {todo} = this.props;
    let element = (
      <div className='view'>
        <input className='toggle' type='checkbox' />
        <label>
          {todo.text}
        </label>
        <button className='destroy' />
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
