import React from 'react';
import { shallow } from 'enzyme';
import HackerNewsDrill from '../components/HackerNewsDrill';
import StoriesContainer from '../components/StoriesContainer';

/********* UNCONNECTED COMPONENT *********/
describe('HNAPI Component - Shallow Render', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HackerNewsDrill />);
  })

  it('renders UNCONNECTED COMPONENT', () => {
  expect(wrapper.length).toEqual(1);
  });

  it('contains 1 header which contains 1 h1 with classname header-title, 1 main, and 1 StoriesContainer', () => {
    expect(wrapper.find('header').length).toEqual(1);
    expect(wrapper.find('header').find('h1').hasClass('header-title'));
    expect(wrapper.find('main').length).toEqual(1);
    expect(wrapper.find(StoriesContainer).length).toEqual(1);
  })

});
