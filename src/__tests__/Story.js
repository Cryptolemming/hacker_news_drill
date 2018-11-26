import React from 'react';
import { shallow, mount } from 'enzyme';
import Story from '../components/Story';
import configureMockStore from 'redux-mock-store';
import { CommentsContainer } from '../components/CommentsContainer';

/********* UNCONNECTED COMPONENT *********/
describe('Story Component - Shallow Render', () => {

  const story = {
      url: '',
      title: '',
      author: '',
      time: '',
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Story story={story} />);
  })

  it('renders CONNECTED component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should contain 1 li, 1 a, 1 h3, 2 spans, 1 p with class names', () => {
    expect(wrapper.find('li').hasClass('story-list-item'));
    expect(wrapper.find('a').hasClass('story-url'));
    expect(wrapper.find('h3').hasClass('story-title'));
    expect(wrapper.find('span').at(0).hasClass('story-author'));
    expect(wrapper.find('span').at(1).hasClass('story-time'));
    expect(wrapper.find('p').hasClass('comments-title'));
  });

  it('should toggle state expanded on handleToggleExpand()', () => {
    expect(wrapper.state('expanded')).toEqual(false);
    expect(wrapper.instance().handleToggleExpand());
    expect(wrapper.state('expanded')).toEqual(true);
  });

  it('should toggle state expanded on click of li', () => {
    expect(wrapper.state('expanded')).toEqual(false);
    expect(wrapper.find('li').simulate('click'))
    expect(wrapper.state('expanded')).toEqual(true);
  })

})
