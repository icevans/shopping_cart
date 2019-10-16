import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ToggleableProductForm from '../components/ToggleableProductForm';

describe('ToggleableProductForm', () => {
  let wrapper;
  let callback;

  beforeEach(() => {
    callback = jest.fn();
    wrapper = shallow(< ToggleableProductForm onSubmit={ callback }/>);
  });

  it('defaults title as empty', () => {
    expect(wrapper.state().title).toEqual('');
  });

  it('defaults price as empty', () => {
    expect(wrapper.state().price).toEqual('');
  });

  it('defaults quantity as empty', () => {
    expect(wrapper.state().quantity).toEqual('');
  });

  it('defaults form visibility as empty', () => {
    expect(wrapper.state().formVisibility).toEqual('');
  });

  it('handleFormToggle sets formVisibility as visible', () => {
    const toggleVisibility = wrapper.find(`a.add-product-button`);
    toggleVisibility.simulate('click', { preventDefault: ()=>{} });
    expect(wrapper.state().formVisibility).toEqual('visible');
  });

  it('handles name input change', () => {
    wrapper.instance().handleInputChange({ target: { name: 'title', value: 'iPhone 11' } });
    expect(wrapper.state().title).toEqual('iPhone 11');
  });

  describe('handleSubmit and handleCancel', () => {
    beforeEach(() => {
      wrapper.instance().handleInputChange({ target: { name: 'title', value: 'iPhone 11' } });
      wrapper.instance().handleInputChange({ target: { name: 'quantity', value: '7' } });
      wrapper.instance().handleInputChange({ target: { name: 'price', value: '500' } });
    });

    it('handleCancel resets the state', () => {
      wrapper.instance().handleCancel({ preventDefault: () => {} });
      expect(wrapper.state().title).toEqual('');
      expect(wrapper.state().quantity).toEqual('');
      expect(wrapper.state().price).toEqual('');
      expect(wrapper.state().formVisibility).toEqual('');
    });

    it('handleSubmit resets the state', () => {
      wrapper.instance().handleSubmit({ preventDefault: () => {} });
      expect(wrapper.state().title).toEqual('');
      expect(wrapper.state().quantity).toEqual('');
      expect(wrapper.state().price).toEqual('');
      expect(wrapper.state().formVisibility).toEqual('');
    });

    it('handleSubmit calls onSubmit', () => {
      wrapper.instance().handleSubmit({ preventDefault: () => {} });
      expect(callback.mock.calls.length).toEqual(1);
    });

    it('handleSubmit takes a product as an argument', () => {
      let expectedArg = {title: wrapper.state().title, price: wrapper.state().price, quantity: wrapper.state().quantity}
      wrapper.instance().handleSubmit({ preventDefault: () => {} });
      expect(callback.mock.calls[0][0]).toEqual(expectedArg);
    });

  });
});
