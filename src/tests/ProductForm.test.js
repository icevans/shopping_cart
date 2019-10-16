import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ProductForm from '../components/ProductForm';

describe('ProductForm', () => {
  it('has product name input', () => {
    const wrapper = shallow(<ProductForm />);
    expect(wrapper.find(`input[name='title']`).length).toEqual(1)
  });

  it('has product quantity input', () => {
    const wrapper = shallow(<ProductForm />);
    expect(wrapper.find(`input[name='quantity']`).length).toEqual(1)
  });

  it('has product price input', () => {
    const wrapper = shallow(<ProductForm />);
    expect(wrapper.find(`input[name='price']`).length).toEqual(1)
  });

  it('calls onInputChange when input is changed', () => {
    const onInputChange = jest.fn();
    const wrapper = shallow(<ProductForm onInputChange={ onInputChange }/>);
    const priceInput = wrapper.find(`input[name='price']`);
    priceInput.simulate('change')

    expect(onInputChange.mock.calls.length).toEqual(1);
  });

  it('calls onSubmit when add is clicked', () => {
    const onSubmit = jest.fn();
    const wrapper = shallow(<ProductForm onSubmit={ onSubmit }/>);
    const addButton = wrapper.find(`a.submit-button`);
    addButton.simulate('click')

    expect(onSubmit.mock.calls.length).toEqual(1);
  });

  it('calls onCancel when add is clicked', () => {
    const onCancel = jest.fn();
    const wrapper = shallow(<ProductForm onCancel={ onCancel }/>);
    const cancelButton = wrapper.find(`a.cancel-button`);
    cancelButton.simulate('click')

    expect(onCancel.mock.calls.length).toEqual(1);
  });

});