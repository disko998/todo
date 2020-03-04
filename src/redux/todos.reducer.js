import { randomId } from '../utils'
import actionType from './todos.types'

export function todoReducer(state = [], action) {
    switch (action.type) {
        case actionType.ADD_TODO:
            return state.concat([{ id: randomId(), text: action.payload, completed: false, date: new Date() }])
        case actionType.REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload)
        case actionType.TOGGLE_TODO:
            return state.map(todo => (action.payload === todo.id ? { ...todo, completed: !todo.completed } : todo))
        case 'persist/REHYDRATE':
            const { todos } = action.payload
            const formatTodos = todos.map(todo => ({ ...todo, date: new Date(todo.date) }))
            return formatTodos
        default:
            return state
    }
}
