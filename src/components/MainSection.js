import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';
import { SHOW_ALL, SHOW_MARKED, SHOW_UNMARKED } from '../constants/TodoFilters';
import autoBind from 'react-autobind';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_UNMARKED]: todo => !todo.marked,
  [SHOW_MARKED]: todo => todo.marked
};

export default class MainSection extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = { filter: SHOW_ALL };
    autoBind(this);
  }

  render() {
    const { todos, actions } = this.props;
    const { filter } = this.state;
    const filteredTodos = todos.filter(TODO_FILTERS[filter]);

    return (
      <section className='main'>
        <ul className='todo-list'>
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
          )}
        </ul>
      </section>
    );
  }
}
