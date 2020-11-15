import '@testing-library/jest-dom';
import React from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { mount } from 'enzyme';

describe('Pruebas en LoginScreen', () => {

    const setUser = jest.fn()

    const user = {
        id: 123,
        name: 'Fernando'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    )

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe ejecutarse el setUser con el argumento esperado', () => {
        wrapper.find('button').simulate('click');
        expect(setUser).toHaveBeenCalledWith(user)
        
    })
    
    

})
