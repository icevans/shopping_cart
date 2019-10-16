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
});