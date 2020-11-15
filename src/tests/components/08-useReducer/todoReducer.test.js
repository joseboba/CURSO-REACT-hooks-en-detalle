import '@testing-library/jest-dom';
import {todoReducer} from '../../../components/08-useReducer/todoReducer';
import { demotTodos } from '../../fixtures/demotTodos';


describe('Pruebas en todoReducer', () => { 
    
    test('debe de retornar el estado por defecto', () => {
        
        const state = todoReducer(demotTodos, {});
        expect(state).toBe(demotTodos);

    })

    test('debe de agregar un TODO', () => {
        
        const newTodo = { 
            id: 3,
            desc: 'Aprender Express',
            done: false
        }

        const action = { 
            type: 'add',
            payload: newTodo
        }

        const state = todoReducer(demotTodos, action);
        expect(state.length).toBe(3);
        expect(state).toEqual([...demotTodos, newTodo])
        
    })

    test('debe de borrar un TODO', () => {
        
        const action = {
            type: 'delete',
            payload: 1
        }

        const state = todoReducer(demotTodos, action);
        expect(state.length).toBe(1)
        expect(state).toEqual([demotTodos[1]])
    })

    test('debe de borrar un TODO', () => {
        
        const action = {
            type: 'toggle',
            payload: 1
        }

        const state = todoReducer(demotTodos, action);
        expect(state[0].done).toBe(true)
        expect(state[1]).toEqual(demotTodos[1])
    })
    
    
})