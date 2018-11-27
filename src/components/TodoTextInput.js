import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import autoBind from 'react-autobind';

export default class TodoTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    newTodo: PropTypes.bool
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    };
    autoBind(this);
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <input className={classnames({
              'new-todo': this.props.newTodo
             })}
             type='text'
             value={this.state.text}
             placeholder={this.props.placeholder}
             autoFocus={true}
             onChange={this.handleChange}
             onKeyDown={this.handleSubmit} />
    );
  }
}
