import React, { useState } from 'react'
import { Box, Paper, makeStyles, ButtonGroup, Button } from '@material-ui/core'
import { connect } from 'react-redux'

import logo from '../assets/logo.svg'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { filterTodos } from '../redux/todos.actions'
import { selectFilter } from '../redux/todos.select'

const useStyle = makeStyles(props => ({
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
    active: {},
}))

function TodoCard({ filterTodos, filter }) {
    const classes = useStyle(filter)

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
                        <Button
                            onClick={() => filterTodos('all')}
                            variant={filter === 'all' ? 'contained' : 'outlined'}
                        >
                            All
                        </Button>
                        <Button
                            onClick={() => filterTodos('in-progress')}
                            variant={filter === 'in-progress' ? 'contained' : 'outlined'}
                        >
                            Progress
                        </Button>
                        <Button
                            onClick={() => filterTodos('completed')}
                            variant={filter === 'completed' ? 'contained' : 'outlined'}
                        >
                            Completed
                        </Button>
                        <Button
                            onClick={() => filterTodos('important')}
                            variant={filter === 'important' ? 'contained' : 'outlined'}
                        >
                            Important
                        </Button>
                    </ButtonGroup>
                    <TodoList />
                </Box>
            </Paper>
        </Box>
    )
}

const mapStateToProps = state => ({
    filter: selectFilter(state),
})

const mapDispatchToProps = dispatch => ({
    filterTodos: filter => dispatch(filterTodos(filter)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoCard)
