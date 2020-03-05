import React, { useState } from 'react'
import { Box, Paper, makeStyles, ButtonGroup, Button } from '@material-ui/core'

import TodoList from './TodoList'
import TodoForm from './TodoForm'
import logo from '../assets/logo.svg'

const useStyle = makeStyles({
    box: {
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
    logo: {
        height: 50,
        marginBottom: '1em',
        marginTop: '1em',
    },
})

function TodoCard() {
    const [filter, setFilter] = useState('all')
    const classes = useStyle()

    return (
        <Box my={2}>
            <Paper elevation={3}>
                <Box p={2} className={classes.box}>
                    <img src={logo} alt='logo' className={classes.logo} />
                    <TodoForm />
                    <ButtonGroup
                        className={classes.wrapper}
                        color='primary'
                        aria-label='outlined primary button group'
                    >
                        <Button onClick={() => setFilter('all')}>All</Button>
                        <Button onClick={() => setFilter('completed')}>Completed</Button>
                        <Button onClick={() => setFilter('in-progress')}>
                            In Progress
                        </Button>
                    </ButtonGroup>
                    <TodoList filter={filter} />
                </Box>
            </Paper>
        </Box>
    )
}

export default TodoCard
