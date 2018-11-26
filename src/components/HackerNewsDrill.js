import React from 'react';
import './HackerNewsDrill.css';
import StoriesContainer from './StoriesContainer';

export default () => {
  return (
    <>
      <header role='banner'>
        <h1 role='heading'>Hacker News Drill</h1>
      </header>
      <main role='main'>
        <StoriesContainer />
      </main>
    </>
  )
}
