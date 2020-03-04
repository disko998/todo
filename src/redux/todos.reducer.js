import { randomId } from '../utils'
import actionType from './todos.types'

export function todoReducer(state = [], action) {
    switch (action.type) {
        case actionType.ADD_TODO:
            return state.concat([{ id: randomId(), text: action.payload, completed: false }])
        case actionType.REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload)
        case actionType.TOGGLE_TODO:
            return state.map(todo => (action.payload === todo.id ? { ...todo, completed: !todo.completed } : todo))
        default:
            return state
    }
}
