import React from 'react'
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Divider
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { Draggable } from 'react-beautiful-dnd'

import DeleteIcon from '@material-ui/icons/Delete'
import AutorenewIcon from '@material-ui/icons/Autorenew'
import DoneAllIcon from '@material-ui/icons/DoneAll'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import LabelImportantTwoToneIcon from '@material-ui/icons/LabelImportantTwoTone'

import { connect } from 'react-redux'
import { toggleTodo, removeTodo, markImportant } from '../redux/todos.actions'

const useStyle = makeStyles({
  trash: {
    alignSelf: 'self-end'
  },
  text: props => ({
    textDecoration: props.completed ? 'line-through' : 'none',
    cursor: 'pointer',
    width: '100%',
    height: '100%',
    userSelect: 'none',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }),
  avatar: props => ({
    background: props.completed ? '#388e3c' : '#42a4f5'
  }),
  listItem: {
    cursor: 'pointer',
    background: '#fff'
  }
})

function TodoCard({ todo, toggleTodo, removeTodo, index, markImportant }) {
  const props = { completed: todo.completed }
  const classes = useStyle(props)

  return (
    <Draggable draggableId={todo.id} index={index}>
      {provided => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <ListItem button className={classes.listItem} onClick={() => toggleTodo(todo.id)}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>{todo.completed ? <DoneAllIcon /> : <AutorenewIcon />}</Avatar>
            </ListItemAvatar>
            <ListItemText className={classes.text} primary={todo.text} />
            <ListItemSecondaryAction>
              {todo.important ? (
                <IconButton edge='end' aria-label='important' onClick={() => markImportant(todo.id)}>
                  <LabelImportantIcon style={{ color: '#faef19' }} />
                </IconButton>
              ) : (
                <IconButton
                  edge='end'
                  aria-label='important'
                  onClick={() => {
                    markImportant(todo.id)
                  }}
                >
                  <LabelImportantTwoToneIcon style={{ color: '#d1d1d1' }} />
                </IconButton>
              )}
              <IconButton edge='end' aria-label='delete' onClick={() => removeTodo(todo.id)}>
                <DeleteIcon color='secondary' />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
        </div>
      )}
    </Draggable>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  removeTodo: id => dispatch(removeTodo(id)),
  markImportant: id => dispatch(markImportant(id))
})

export default connect(null, mapDispatchToProps)(TodoCard)
