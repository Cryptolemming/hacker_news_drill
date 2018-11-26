import React from 'react';
import { shallow } from 'enzyme';
import Comment from '../components/Comment';

/********* UNCONNECTED COMPONENT *********/
describe('Comment Component - Shallow Render', () => {

  const props = {
    idx: 0,
    comment: {
      author: '',
      time: '',
      text: '',
    }
  }

  let wrapper;

  beforeEach(() => {
      wrapper = shallow(<Comment idx={props.idx} comment={props.comment} />, { disableLifecycleMethods: true });
  })

  it('renders UNCONNECTED COMPONENT', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render 1 li, 2 spans, 1 p with classes', () => {
    expect(wrapper.find('li').hasClass('comment-list-item')).toBe(true);
    expect(wrapper.find('span').at(0).hasClass('comment-author')).toBe(true);
    expect(wrapper.find('span').at(1).hasClass('comment-time')).toBe(true);
    expect(wrapper.find('p').hasClass('comment-text')).toBe(true);
  })

  it('should render li class extension based on idx value', () => {
    // if idx is even
    expect(wrapper.find('li').hasClass('dark')).toBe(true);
    // if idx is odd
    expect(wrapper.setProps({idx: 1}).find('li').hasClass('light')).toBe(true);
  })

})
