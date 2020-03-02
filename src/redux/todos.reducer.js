import { randomId } from '../utils'

export function todoReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([{ id: randomId(), text: action.payload, completed: false }])
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.payload)
        case 'TOGGLE_TODO':
            return state.map(todo => (action.payload === todo.id ? { ...todo, completed: !todo.completed } : todo))
        default:
            return state
    }
}
