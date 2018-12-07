import React, { Component } from 'react';

class Comment extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: 'DELETE_COMMENT',
      id: this.props.comment.id
    });
  }

  render() {
    return (
      <li>
        <span>{this.props.comment.text}</span><button onClick={() => this.handleOnClick()}>DELETE</button>
        </li>
    );
  }
};

export default Comment;