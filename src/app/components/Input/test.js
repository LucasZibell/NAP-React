import React from 'react';
import { mount } from 'enzyme';
import { reduxForm } from 'redux-form';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import FilterInput from './index';

const mockStore = configureMockStore([thunk]);
const initialState = {};
const spy = jest.fn();
const Decorated = reduxForm({ form: 'testForm' })(FilterInput);

describe('Test for generic <FilterInput /> component', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Decorated handleSubmit={spy} submit={spy} />
      </Provider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('Should render FilterInput', () => {
    expect(wrapper.find(FilterInput)).toHaveLength(1);
  });
});
