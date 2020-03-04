import actionType from './todos.types'

export const addTodo = text => ({
    type: actionType.ADD_TODO,
    payload: text,
})

export const removeTodo = id => ({
    type: actionType.REMOVE_TODO,
    payload: id,
})

export const toggleTodo = id => ({
    type: actionType.TOGGLE_TODO,
    payload: id,
})

export const updateTodos = todos => ({
    type: actionType.UPDATE_TODOS,
    payload: todos,
})
