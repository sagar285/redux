import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from 'react-redux'
import userReducer from "./user"

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
)
