import React from 'react'

import { connect } from 'react-redux'
import Todo from './Todo'
import { Typography, makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
    label: {
        marginTop: 40,
        textAlign: 'center',
    },
})

function TodoCard({ todos }) {
    const classes = useStyle()
    const sortedTodos = todos.sort((a, b) => b.date - a.date)

    return todos.length ? (
        sortedTodos.map(todo => <Todo key={todo.id} todo={todo} />)
    ) : (
        <Typography className={classes.label}>{`Hi there, looks like you don't have anything to do :)`}</Typography>
    )
}

const mapStateToProps = state => ({
    todos: state.todos,
})

export default connect(mapStateToProps)(TodoCard)
