import React, { useState } from 'react'
import { Box, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import AddBoxIcon from '@material-ui/icons/AddBox'
import { connect } from 'react-redux'

import { addTodo } from '../redux/todos.actions'

const useStyle = makeStyles({
    input: {
        width: '100%',
    },
    button: {
        marginTop: 10,
        width: '100%',
    },
})

function TodoForm({ addTodo }) {
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
        <Box my={2} px={2} display='flex' flexDirection='column'>
            <form onSubmit={addNewTodo}>
                <TextField
                    value={todoValue}
                    onChange={onTextChange}
                    className={classes.input}
                    id='todo'
                    label='Your Todo'
                    variant='outlined'
                    onSubmit={addNewTodo}
                />
                <Button
                    onClick={addNewTodo}
                    variant='contained'
                    color='primary'
                    size='large'
                    className={classes.button}
                    startIcon={<AddBoxIcon />}
                >
                    Add Todo
                </Button>
            </form>
        </Box>
    )
}

const mapDispatchToProps = dispatch => ({
    addTodo: text => dispatch(addTodo(text)),
})

export default connect(null, mapDispatchToProps)(TodoForm)
