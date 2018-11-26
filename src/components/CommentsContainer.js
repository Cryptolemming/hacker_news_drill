import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import { fetchTopComments } from '../actions';
import uuid from 'uuid/v4';

export class CommentsContainer extends Component {
  constructor(props) {
    super(props);

    this.renderComments = this.renderComments.bind(this);
  }

  componentDidMount() {
    if (this.props.comments.length === 0) {
      this.props.dispatch(fetchTopComments(this.props.commentIds, this.props.storyId));
    }
  }

  renderComments() {
    if (this.props.comments.length === 0 || this.props.comments[0].loading) {
      return <p className='loading'>loading...</p>
    }
    return this.props.comments.map(comment => {
      return <Comment key={uuid()} comment={comment} />;
    })
  }

  render() {
    return (
      <ul className='comments-container'>
        {this.renderComments()}
      </ul>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  commentIds: ownProps.comments,
  storyId: ownProps.storyId,
  comments: state.comments[ownProps.comments[0]] !==  undefined ?
    ownProps.comments.map(commentId => state.comments[commentId]) : [],
})

export default connect(mapStateToProps)(CommentsContainer);
