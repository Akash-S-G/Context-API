import React, { createContext, useContext } from 'react'

const Todocontext = createContext({
    todos: [{
        id: 1,
        text: 'First Todo test',
        completed: false
    }],
    addTodo: (todo) => { },
    updateTodo: (id,todo) => { },
    removeTodo: (id) => { },
    toggleComplete: (id ) => { }

});

export default Todocontext;

export const ContextProvider = Todocontext.Provider;

export function useTodo() {
    return useContext(Todocontext)
}