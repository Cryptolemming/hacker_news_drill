import React from 'react';
import { shallow, mount } from 'enzyme';
import ConnectedCommentsContainer, { CommentsContainer } from '../components/CommentsContainer';
import configureMockStore from 'redux-mock-store';
import Comment from '../components/Comment';

/********* UNCONNECTED COMPONENT *********/
describe('CommentsContainer Component - Shallow Render', () => {

  const props = {
      commentIds: [],
      comments: [],
      storyId: 0,
      loadingComments: [{loading: true}],
      loadedComments: [{
        loading: false,
        idx: 0,
        comment: {}
      }]
  }

  let wrapper;

  beforeEach(() => {
      wrapper = shallow(<CommentsContainer
        comments={props.comments}
        commentIds={props.commentIds}
        storyId={props.storyId} />, { disableLifecycleMethods: true });
  })

  it('renders UNCONNECTED COMPONENT', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render 1 section, 1 ul with classes', () => {
    expect(wrapper.find('section').hasClass('comments-container')).toBe(true);
    expect(wrapper.find('ul').hasClass('comments-list')).toBe(true);
  })

  it('should render loading if comments empty or loading and Comment elements otherwise', () => {
    expect(wrapper.find('p').hasClass('loading')).toBe(true);
    wrapper.setProps({comments: props.loadingComments});
    expect(wrapper.find('p').hasClass('loading')).toBe(true)
    wrapper.setProps({comments: props.loadedComments});
    expect(wrapper.find('p').length).toEqual(0);
    expect(wrapper.find(Comment).length).toEqual(1);
  })

})

/********* CONNECTED COMPONENT *********/
describe('CommentsContainer CONNECTED  Component - Shallow + pass store + props', () => {

  const initialState = {
    comments: [],
  }

  const props = {
    commentIds: [0],
    storyId: '',
  }

  const mockStore = configureMockStore();
  let wrapper, store;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<ConnectedCommentsContainer
      store={store}
      commentIds={props.commentIds}
      storyId={props.storyId}
      />);
  })

  it('should render the CONNECTED component', () => {
    expect(wrapper.length).toEqual(1);
  })

})
