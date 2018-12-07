import React, { Component } from 'react';
import Comments from './comments';

class CommentInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  };

  handleOnChange(event){
    this.setState({
      text: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_COMMENT',
      comment: {
        text: this.state.text,
        artworkId: this.props.artworkId,
      },
    });
    debugger
    this.setState({
      text: '',
    });
  }
   
  render() {
      //debugger
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" onChange={(event) => this.handleOnChange(event)}  value={this.state.text}/>
          <input type="submit" />
        </form>
        
        <Comments 
          store={this.props.store} 
          artworkId={this.props.artworkId} />
      </div>
    );
  }
};

export default CommentInput;
