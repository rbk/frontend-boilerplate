import React from 'react';

import {mount} from 'enzyme';
import {expect} from 'chai';

import Title from './Title';

describe('<Title />', () => {

  it('should render an h1', () => {

    const wrapper = shallow(<Title />);
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should render text', () => {

    const wrapper = shallow(<Title text="Text"/>);
    expect(wrapper.text()).to.equal('Text');
  });

})
