export const randomId = () =>
    '_' +
    Math.random()
        .toString(36)
        .substr(2, 9)

export const filterTodos = (filter, todos) => {
    switch (filter) {
        case 'all':
            return todos
            break
        case 'completed':
            return todos.filter(todo => todo.completed)
            break
        case 'in-progress':
            return todos.filter(todo => !todo.completed)
            break
        default:
            return todos
            break
    }
}
