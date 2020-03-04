import React from 'react'
import { Typography, Box, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

import TodoList from './TodoList'
import TodoForm from './TodoForm'

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
})

function TodoCard() {
    const classes = useStyle()

    return (
        <Box my={2}>
            <Paper elevation={3} className={classes.box}>
                <Box p={2}>
                    <Typography variant='h4' className={classes.title}>
                        Add Todo:
                    </Typography>
                    <TodoForm />
                    <TodoList />
                </Box>
            </Paper>
        </Box>
    )
}

export default TodoCard
