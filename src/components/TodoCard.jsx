import React, { useState } from 'react'
import { Typography, Box, Paper, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import AddBoxIcon from '@material-ui/icons/AddBox'
import { connect } from 'react-redux'

import TodoList from './TodoList'
import { addTodo } from '../redux/todos.actions'

const useStyle = makeStyles({
    box: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    title: {
        color: '#4d4d4d',
        textAlign: 'center',
    },
    input: {
        width: '100%',
    },
    button: {
        marginTop: 10,
    },
})

function TodoCard({ addTodo }) {
    const [todoValue, setValue] = useState('')
    const classes = useStyle()

    const addNewTodo = () => {
        todoValue.length && addTodo(todoValue)
        setValue('')
    }
    const onTextChange = e => {
        setValue(e.target.value)
    }

    return (
        <Box my={2}>
            <Paper elevation={3} className={classes.box}>
                <Box p={2}>
                    <Typography variant='h4' className={classes.title}>
                        Add To Do:
                    </Typography>
                    <Box my={2} px={2} display='flex' flexDirection='column'>
                        <TextField
                            value={todoValue}
                            onChange={onTextChange}
                            className={classes.input}
                            id='todo'
                            label='Add Todo'
                            variant='outlined'
                        />
                        <Button
                            onClick={addNewTodo}
                            variant='contained'
                            color='primary'
                            size='large'
                            className={classes.button}
                            startIcon={<AddBoxIcon />}
                        >
                            Add
                        </Button>
                    </Box>
                    <TodoList />
                </Box>
            </Paper>
        </Box>
    )
}

const mapDispatchToProps = dispatch => ({
    addTodo: text => dispatch(addTodo(text)),
})

export default connect(null, mapDispatchToProps)(TodoCard)
