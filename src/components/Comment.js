import React from 'react';

export default props => {
  const comment = props.comment;
  return (
    <li className='comment-list-item'>
      <span className='comment-author'>{comment.author}</span>
      <span className='comment-time'>{comment.time}</span>
      <p className='comment-text'>{comment.text}</p>
    </li>
  );
}
