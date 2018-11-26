import React, { Component } from 'react';
import CommentsContainer from './CommentsContainer';
import './Story.css';

export default class Story extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    }

    this.handleToggleExpand = this.handleToggleExpand.bind(this);
    this.renderComments = this.renderComments.bind(this);
  }

  handleToggleExpand() {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  renderComments() {
    return this.state.expanded
      ? <CommentsContainer storyId={this.props.story.id} comments={this.props.story.comments} />
      : '';
  }

  render() {
    return (
      <li className='story-list-item' onClick={() => this.handleToggleExpand()}>
        <a href={`${this.props.story.url}`} className='story-url'>
          <h3 className='story-title'>{this.props.story.title}</h3>
        </a>
        <span className='story-author'>{this.props.story.author}</span>
        <span className='story-time'>{this.props.story.time}</span>
        <p className='story-comments-heading'>comments</p>
        {this.renderComments()}
      </li>
    );
  }
}
