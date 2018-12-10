import React, { Component } from 'react';
import Comment from './comment';

class Comments extends Component {
  render() {
    const { store, artworkId } = this.props;
    const comments = store.getState().comments.filter(comment => comment.artworkId === artworkId).map((comment, index) => {
      return <Comment store={store} key={index} comment={comment} />
    });
    //debugger
    return (
      <ul>
        {comments}
      </ul>
    );
  }
};

export default Comments;