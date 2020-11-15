import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demotTodos } from '../../fixtures/demotTodos';

describe('Pruebas en <TodoList />', ()=>{
    
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList 
            todos = { demotTodos }
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    )

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener dos TodoListitem', () => {
        expect(wrapper.find('TodoListItem').length).toBe(demotTodos.length);
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
    })
    

})