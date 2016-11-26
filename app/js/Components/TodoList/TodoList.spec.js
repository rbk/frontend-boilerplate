import React from 'react';
import {merge} from 'lodash';

import {mount, shallow} from 'enzyme';
import {expect} from 'chai';

// Todo List Components
import TodoListContainer from './TodoListContainer';
import TodoInput from './TodoInput';
import Todo from './Todo';



// Create mock todo
function mockTodo(overrides = {}) {
  let base = {
    text: 'this is a todo',
    completed: false,
  };

  return merge({}, base, overrides);
}


/**
 * TodoListContainer Component
 *
 * 1. should render
 * 2. should render a TodoInput component
 * 3. should render a Todo component
 * 4. should have an initial todos state
 * 5. should take todos as a prop to override initial
 * 6. should pass the deleteTodo function
 * 7. should delete a todo when the delete button is hit
 */
describe('<TodoListContainer />', () => {

  it('should render', () => {

    let wrapper = shallow(<TodoListContainer />);
    expect(wrapper).to.have.length(1);
  });

  it('should render <TodoInput />', () => {

    let wrapper = shallow(<TodoListContainer />);
    expect(wrapper.find(TodoInput)).to.have.length(1);
  });

  it('should render <Todo />', () => {

    let wrapper = shallow(<TodoListContainer todos={[mockTodo()]} />);
    expect(wrapper.find(Todo)).to.have.length(1);
  });

  it('should have an initial list state', () => {

    const wrapper = mount(<TodoListContainer />);
    expect(wrapper.state('todos')).to.eql([]);
  });

  it('should take todos as a prop to override initial', () => {

    const wrapper = mount(<TodoListContainer todos={[mockTodo(), mockTodo(), mockTodo()]}/>);
    expect(wrapper.prop('todos')).to.eql([mockTodo(), mockTodo(), mockTodo()]);
  });

  it('should be deleteable', () => {

    const wrapper = mount(<TodoListContainer todos={[mockTodo(), mockTodo(), mockTodo()]} />);
    wrapper.find('button[type="delete"]').first().simulate('click');
    expect(wrapper.find('button[type="delete"]')).to.have.length(2);
  });

  it('should pass addTodo to <TodoInput />', () => {

    const wrapper = mount(<TodoListContainer todos={[mockTodo(), mockTodo(), mockTodo()]} />);
    const todoInput = wrapper.find(TodoInput);
    const addTodo = wrapper.instance().addTodo;
    expect(todoInput.prop('addTodo')).to.eql(addTodo);
  });

});



/**
 * TodoInput Component
 *
 * 1. It should render
 * 2. It should have a text input
 * 3. It should have a submit button
 * 4. The submit button should work
 */
describe('<TodoInput />', () => {

  it('should render', () => {

    const wrapper = shallow(<TodoInput />);
    expect(wrapper).to.have.length(1);
  });

  it('should have a text input', () => {

    const wrapper = shallow(<TodoInput />);
    expect(wrapper.find('input[type="text"]')).to.have.length(1);
  });

  it('should have a sumbit button', () => {

    const wrapper = shallow(<TodoInput />);
    expect(wrapper.find('button[type="submit"]')).to.have.length(1);
  });

  it('should add items to the list', () => {

    const wrapper = mount(<TodoListContainer />);
    wrapper.find('input[type="text"]').get(0).value = mockTodo().text;
    wrapper.find('button[type="submit"]').simulate('click');
    expect(wrapper.state('todos')).to.eql([mockTodo()]);
  });

});


/**
 * Test the Todo Component
 *
 * 1. It should render
 * 2. It should have a checkbox
 * 3. It should have a delete button
 * 4. It should be able to be completed by checking the box
 * 5. It should change the checkbox based on the completed status
 */
describe('<Todo />', () => {

  it('should render', () => {

    const wrapper = shallow(<Todo {...mockTodo()} />);
    expect(wrapper).to.have.length(1);
  });

  it('should have a checkbox', () => {

    const wrapper = shallow(<Todo {...mockTodo()} />);
    expect(wrapper.find('input[type="checkbox"]')).to.have.length(1);
  });

  it('should have a delete button', () => {

    const wrapper = shallow(<Todo {...mockTodo()} />);
    expect(wrapper.find('button[type="delete"]')).to.have.length(1);
  });

  it('should be completable', () => {

    const wrapper = shallow(<Todo {...mockTodo()} />);
    wrapper.instance().toggleCompleted();
    expect(wrapper.state('completed')).to.eql(true);
  });

  it('should change the checkbox based on completed value', () => {

    const wrapper = shallow(<Todo {...mockTodo()} />);
    wrapper.instance().toggleCompleted();
    expect(wrapper.find('input[type="checkbox"]').prop('checked')).to.be.true;
  });


});


