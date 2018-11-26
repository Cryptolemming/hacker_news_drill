import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopStoryIds } from '../actions';
import Story from './Story';
import uuid from 'uuid/v4';
import './StoriesContainer.css';

export class StoriesContainer extends Component {
  constructor(props) {
    super(props);

    this.renderStories = this.renderStories.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchTopStoryIds());
  }

  renderStories() {
    return this.props.stories.length > 0 ? this.props.stories.map(story => {
      return <Story key={uuid()} story={story} />;
    }) : '';
  }

  render() {
    console.log('stories ' + JSON.stringify(this.props.stories));

    return (
      <section role='contentinfo' className='stories-container'>
        <ul className='stories-list'>
          {this.renderStories()}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  stories: Object.values(state.stories)
})

export default connect(mapStateToProps)(StoriesContainer);
