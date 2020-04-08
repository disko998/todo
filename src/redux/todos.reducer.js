import { randomId } from '../utils'
import actionType from './todos.types'

const defaultState = {
    todos: [],
    filter: 'all',
}

export function todoReducer(state = defaultState, action) {
    switch (action.type) {
        case actionType.ADD_TODO:
            const todos = [...state.todos]
            todos.unshift({
                id: randomId(),
                text: action.payload,
                completed: false,
                date: new Date(),
            })
            return { ...state, todos }

        case actionType.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            }

        case actionType.TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    action.payload === todo.id
                        ? { ...todo, completed: !todo.completed }
                        : todo,
                ),
            }

        case actionType.UPDATE_TODOS:
            return { ...state, todos: action.payload }

        case actionType.MARK_IMPORTANT:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    action.payload === todo.id
                        ? { ...todo, important: !Boolean(todo.important) }
                        : todo,
                ),
            }

        case actionType.FILTER_TODOS:
            return {
                ...state,
                filter: action.payload,
            }

        case 'persist/REHYDRATE':
            if (action.payload) {
                const { todo } = action.payload
                const withFormatDate = todo.todos.map(todo => ({
                    ...todo,
                    date: new Date(todo.date),
                }))
                return { ...state, todos: withFormatDate }
            } else {
                return state
            }

        default:
            return state
    }
}
