import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { makeServer } from './utils/mirageServer'

import store from './store/store'

import App from './App'
import './scss/main.scss'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

const root = document.getElementById('root') as HTMLElement
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  root
)
