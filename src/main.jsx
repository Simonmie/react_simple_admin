import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import 'normalize.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/index'
import { Provider } from 'react-redux'
import store from './store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
