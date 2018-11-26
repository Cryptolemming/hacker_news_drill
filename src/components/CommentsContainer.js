import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import { fetchTopComments } from '../actions';
import uuid from 'uuid/v4';
import './CommentsContainer.css';

export class CommentsContainer extends Component {
  constructor(props) {
    super(props);

    this.renderComments = this.renderComments.bind(this);
  }

  componentDidMount() {
    if (this.props.comments.length === 0 || this.props.comments[0].loading) {
      this.props.dispatch(fetchTopComments(this.props.commentIds, this.props.storyId));
    }
  }

  renderComments() {
    if (this.props.comments.length === 0 || this.props.comments[0].loading) {
      return <p className='loading'>loading...</p>
    }
    return this.props.comments.map((comment, idx) => {
      return <Comment key={uuid()} comment={comment} idx={idx} />;
    })
  }

  render() {
    return (
      <section className='comments-container'>
        <ul className='comments-list'>
          {this.renderComments()}
        </ul>
      </section>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  commentIds: ownProps.commentIds,
  storyId: ownProps.storyId,
  comments: state.comments[ownProps.commentIds[0]] !==  undefined ?
    ownProps.commentIds.map(commentId => state.comments[commentId]) : [],
})

export default connect(mapStateToProps)(CommentsContainer);
