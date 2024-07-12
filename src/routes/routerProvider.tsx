import App from '@/App'
import NotFound from '@/pages/NotFoundPage'
import TestPageWithParam from '@/pages/TestPageWithParam'
import {
  createBrowserRouter,
  RouterProvider as Provider
} from 'react-router-dom'

// Borrar luego
// import PageTest from '../pages/pageTest'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <h1>Inicio</h1>
      },
      {
        path:'weapons/:weapon',
        element:<TestPageWithParam/>
      }
    ]
  }
])

export const RouterProvider = () => {
  return <Provider router={router} />
}