import React, { Component } from 'react';

export default class Story extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className='story-list-item'>
        <a className='story-link'>
          <h3 className='story-title'>{this.props.story.title}</h3>
        </a>
        <span className='story-author'>{this.props.story.author}</span>
        <span className='story-time'>{this.props.story.time}</span>
        <p className='story-comments-heading'>comments</p>
      </li>
    );
  }
}
