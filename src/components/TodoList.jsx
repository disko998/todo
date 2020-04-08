import React from 'react'
import { List } from '@material-ui/core'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { Typography, makeStyles } from '@material-ui/core'
import { connect } from 'react-redux'

import Todo from './Todo'
import { updateTodos } from '../redux/todos.actions'
import { randomId } from '../utils'
import { selectTodos } from '../redux/todos.select'

const useStyle = makeStyles({
    label: {
        marginTop: 40,
        textAlign: 'center',
    },
})

function TodoList({ todos, updateTodos }) {
    const classes = useStyle()

    const onDragEnd = result => {
        const { destination, source, draggableId } = result

        if (!destination) return

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        )
            return

        const newOrder = Array.from(todos)
        const sourceTodo = newOrder.find(todo => todo.id === draggableId)

        newOrder.splice(source.index, 1)
        newOrder.splice(destination.index, 0, sourceTodo)

        updateTodos(newOrder)
    }

    return todos.length ? (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId={randomId()}>
                {provided => (
                    <List ref={provided.innerRef} {...provided.droppableProps}>
                        {todos.map((todo, index) => (
                            <Todo key={todo.id} todo={todo} index={index} />
                        ))}
                        {provided.placeholder}
                    </List>
                )}
            </Droppable>
        </DragDropContext>
    ) : (
        <Typography
            className={classes.label}
        >{`Hi, looks like you don't have anything to do today :)`}</Typography>
    )
}

const mapStateToProps = state => ({
    todos: selectTodos(state),
})

const mapDispatchToProps = dispatch => ({
    updateTodos: todos => dispatch(updateTodos(todos)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
