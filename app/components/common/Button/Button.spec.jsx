import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../Button';
import sinon from 'sinon';
import renderer from 'react-test-renderer';

describe('Button', () => {
  it('should return an element.', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.containsMatchingElement(<button>Execute</button>)).toEqual(true);
  });

  // Event tests
  it('Button action triggered on Enter Press', () => {
    const buttonClick = sinon.spy();
    const wrapper = mount(
      <Button onClick={buttonClick}/>
    );
    wrapper.find('button').simulate('keypress', { which: 13 });
    expect(buttonClick.calledOnce).toEqual(true);
  });

  it('Button action triggered on Click', () => {
    const buttonClick = sinon.spy();
    const wrapper = mount(
      <Button onClick={buttonClick}/>
    );
    wrapper.find('button').simulate('click');
    expect(buttonClick.calledOnce).toEqual(true);
  });

  // Snapshot tests
  it('Renders Correctly', () => {
    const tree = renderer.create(
      <Button/>
    );
    expect(tree).toMatchSnapshot();
  });

  it('Renders Passed Text Correctly', () => {
    const tree = renderer.create(
      <Button text='Submit'/>
    );
    expect(tree).toMatchSnapshot();
  });
});