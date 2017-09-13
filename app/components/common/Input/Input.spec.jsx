import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from '../Input';
import sinon from 'sinon';

describe('Input', () => {
  it('should return an element.', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.containsMatchingElement(<input/>)).toEqual(true);
  });

  it('inputChanged action triggered on change', () => {
    const inputChanged = sinon.spy();
    const wrapper = mount(
      <Input onChange={inputChanged}/>
    );
    wrapper.find('input').simulate('change');
    expect(inputChanged.calledOnce).toEqual(true);
  });
});