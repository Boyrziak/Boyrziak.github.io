import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createHashRouter,
    RouterProvider
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux'
import { routes } from './routes'
import './index.css';

const router = createHashRouter(routes)

// @ts-expect-error
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
