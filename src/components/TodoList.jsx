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

    return todos.length ? (
        todos.map(todo => <Todo key={todo.id} todo={todo} />)
    ) : (
        <Typography className={classes.label}>{`Hey there, add some todos :)`}</Typography>
    )
}

const mapStateToProps = state => ({
    todos: state.todos,
})

export default connect(mapStateToProps)(TodoCard)
