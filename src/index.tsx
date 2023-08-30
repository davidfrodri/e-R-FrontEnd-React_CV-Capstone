import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { makeServer } from './utils/mirageServer'

import store from './store/store'

import App from './App'
import './scss/main.scss'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
