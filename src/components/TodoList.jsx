import React, { useState } from 'react'
import { List } from '@material-ui/core'

import { connect } from 'react-redux'
import Todo from './Todo'
import { Typography, makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
    label: {
        marginTop: 40,
        textAlign: 'center',
    },
    list: {
        listStyleType: 'none',
    },
})

function TodoCard({ todos }) {
    const [dense, setDense] = React.useState(false)
    const classes = useStyle()
    const sortedTodos = todos.sort((a, b) => b.date - a.date)

    return todos.length ? (
        <List dense={dense}>
            {sortedTodos.map(todo => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </List>
    ) : (
        <Typography className={classes.label}>{`Hi there, looks like you don't have anything to do :)`}</Typography>
    )
}

const mapStateToProps = state => ({
    todos: state.todos,
})

export default connect(mapStateToProps)(TodoCard)
