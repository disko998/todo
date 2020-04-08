export const randomId = () => '_' + Math.random().toString(36).substr(2, 9)

export const filterTodos = (filter, todos) => {
    switch (filter) {
        case 'all':
            return todos
        case 'completed':
            return todos.filter(todo => todo.completed)
        case 'in-progress':
            return todos.filter(todo => !todo.completed)
        case 'important':
            return todos.filter(todo => todo.important)
        default:
            return todos
    }
}
