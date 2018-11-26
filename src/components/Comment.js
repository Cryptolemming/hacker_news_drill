import React from 'react';
import './Comment.css';

export default props => {
  const comment = props.comment;
  const backgroundColor = props.idx % 2 === 0 ? 'dark' : 'light';
  return (
    <li className={`comment-list-item${backgroundColor}`}>
      <span className='comment-author'>{comment.author}</span>
      <span className='comment-time'>{comment.time}</span>
      <p className='comment-text'>{comment.text}</p>
    </li>
  );
}
