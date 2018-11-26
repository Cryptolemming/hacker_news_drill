import React from 'react';
import { shallow } from 'enzyme';
import ConnectedStoriesContainer, { StoriesContainer } from '../components/StoriesContainer';
import configureMockStore from 'redux-mock-store';

/********* UNCONNECTED COMPONENT *********/
describe('StoriesContainer Component - Shallow Render', () => {

  const stories = {};
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StoriesContainer stories={stories} />, { disableLifecycleMethods: true });
  });

  it('renders UNCONNECTED component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('renders 1 section, 1 ul', () => {
    expect(wrapper.find('section').hasClass('stories-container'));
    expect(wrapper.find('ul').hasClass('stories-list'));
  })

})

/********* CONNECTED shallow COMPONENT *********/
describe('StoriesContainer Component - CONNECTED - shallow render with mock store', () => {

  const initialState = {
    stories: [],
  }

  const mockStore = configureMockStore();

  let wrapper, store;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<ConnectedStoriesContainer store={store} />, { disableLifecycleMethod: true });
  })

  it('should render CONNECTED component', () => {
    expect(wrapper.length).toEqual(1);
  })

  it('should match props and initialState', () => {
    expect(wrapper.prop('stories')).toEqual(initialState.stories);
  })

})
