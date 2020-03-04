import React from 'react'
import { Container } from '@material-ui/core'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import TodoCard from './components/TodoCard'
import { store, persistor } from './redux/store'

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Container maxWidth='md'>
                    <TodoCard />
                </Container>
            </PersistGate>
        </Provider>
    )
}

export default App
