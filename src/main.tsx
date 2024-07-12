import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from './routes/routerProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider/>
  </React.StrictMode>,
)
