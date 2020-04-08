import { createSelector } from 'reselect'
import { filterTodos } from '../utils/index'

export const selectTodoFeatures = state => state.todo

export const selectTodos = createSelector(selectTodoFeatures, todo =>
    filterTodos(todo.filter, todo.todos),
)
export const selectFilter = createSelector(selectTodoFeatures, todo => todo.filter)
