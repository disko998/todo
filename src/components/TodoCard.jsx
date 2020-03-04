import React, { useState } from 'react'
import { Typography, Box, Paper, makeStyles, ButtonGroup, Button } from '@material-ui/core'

import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { connect } from 'react-redux'

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
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
})

function TodoCard() {
    const [filter, setFilter] = useState('all')
    const classes = useStyle()

    return (
        <Box my={2}>
            <Paper elevation={3} className={classes.box}>
                <Box p={2}>
                    <Typography variant='h4' className={classes.title}>
                        Add Todo
                    </Typography>
                    <TodoForm />
                    <ButtonGroup
                        className={classes.wrapper}
                        color='primary'
                        aria-label='outlined primary button group'
                    >
                        <Button onClick={() => setFilter('all')}>All</Button>
                        <Button onClick={() => setFilter('completed')}>Completed</Button>
                        <Button onClick={() => setFilter('in-progress')}>In Progress</Button>
                    </ButtonGroup>
                    <TodoList filter={filter} />
                </Box>
            </Paper>
        </Box>
    )
}

export default TodoCard
