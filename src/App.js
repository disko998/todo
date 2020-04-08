import React from 'react'
import { Container } from '@material-ui/core'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css'
import TodoCard from './components/TodoCard'
import { store, persistor } from './redux/store'
import { GitHubCorner } from './components/github-corner'

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <GitHubCorner githubLink={'https://github.com/disko998/just-todos'} />
                <Container maxWidth='md'>
                    <TodoCard />
                </Container>
            </PersistGate>
        </Provider>
    )
}

export default App
