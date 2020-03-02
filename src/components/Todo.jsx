import React from 'react'
import { Divider, Box, Typography, FormControlLabel, Checkbox, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../redux/todos.actions'

const useStyle = makeStyles({
    trash: {
        alignSelf: 'self-end',
    },
    text: props => ({
        textDecoration: props.completed ? 'line-through' : 'none',
        cursor: 'pointer',
        width: '100%',
        height: '100%',
        userSelect: 'none',
    }),
})

function TodoCard({ todo, toggleTodo, removeTodo }) {
    const props = { completed: todo.completed }
    const classes = useStyle(props)

    return (
        <div key={todo.id}>
            <Box display='flex' alignItems='center' p={2}>
                <FormControlLabel
                    control={
                        <Checkbox
                            color='primary'
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                            value='checkedG'
                        />
                    }
                />
                <Typography onClick={() => toggleTodo(todo.id)} className={classes.text}>
                    {todo.text}
                </Typography>
                <IconButton
                    onClick={() => removeTodo(todo.id)}
                    className={classes.trash}
                    aria-label='delete'
                    color='secondary'
                >
                    <DeleteIcon fontSize='small' />
                </IconButton>
            </Box>
            <Divider />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    removeTodo: id => dispatch(removeTodo(id)),
})

export default connect(null, mapDispatchToProps)(TodoCard)
