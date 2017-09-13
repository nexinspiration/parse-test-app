import React from 'react';
import { shallow, mount } from 'enzyme';
import { ComputeIO, Output } from '../ComputeIO';
import Input from '../common/Input';
import Button from '../common/Button';
import sinon from 'sinon';
import renderer from 'react-test-renderer';

describe('ComputeIO', () => {
  it('should return an element.', () => {
    const wrapper = shallow(<ComputeIO />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should contain Input, Output & Button elements', () => {
    const wrapper = shallow(<ComputeIO />);
    expect(wrapper.find(Input)).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(Output)).toHaveLength(1);
  });

  it('Output computation should trigger on button click', () => {
    sinon.spy(ComputeIO.prototype, 'computeOutput');
    const wrapper = mount(
      <ComputeIO />
    );
    wrapper.find('button').simulate('click');
    expect(ComputeIO.prototype.computeOutput.calledOnce).toEqual(true);
  });

  // Snapshot tests
  it('Renders Correctly', () => {
    const tree = renderer.create(
      <ComputeIO />
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('Output', () => {
  it('should return an element.', () => {
    const wrapper = shallow(<Output />);
    expect(wrapper.exists()).toBe(true);
  });
});
