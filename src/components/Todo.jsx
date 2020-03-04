import React from 'react'
import {
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemSecondaryAction,
    ListItemText,
    IconButton,
    Divider,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import AutorenewIcon from '@material-ui/icons/Autorenew'
import DoneAllIcon from '@material-ui/icons/DoneAll'

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
    avatar: props => ({
        background: props.completed ? '#388e3c' : '#42a4f5',
    }),
    listItem: {
        cursor: 'pointer',
    },
})

function TodoCard({ todo, toggleTodo, removeTodo }) {
    const props = { completed: todo.completed }
    const classes = useStyle(props)

    return (
        <React.Fragment>
            <ListItem button className={classes.listItem} onClick={() => toggleTodo(todo.id)}>
                <ListItemAvatar>
                    <Avatar className={classes.avatar}>{todo.completed ? <DoneAllIcon /> : <AutorenewIcon />}</Avatar>
                </ListItemAvatar>
                <ListItemText className={classes.text} primary={todo.text} />
                <ListItemSecondaryAction>
                    <IconButton edge='end' aria-label='delete' onClick={() => removeTodo(todo.id)}>
                        <DeleteIcon color='secondary' />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider />
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    removeTodo: id => dispatch(removeTodo(id)),
})

export default connect(null, mapDispatchToProps)(TodoCard)
