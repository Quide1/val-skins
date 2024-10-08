import App from '@/App'
import HomePage from '@/pages/HomePage'
import NotFound from '@/pages/NotFoundPage'
import PlayerCardsPage from '@/pages/PlayerCardsPage'
import SpraysPage from '@/pages/SpraysPage'
import WeaponPage from '@/pages/WeaponPage'
import {
  createBrowserRouter,
  RouterProvider as Provider
} from 'react-router-dom'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path:'weapons/:weapon',
        element:<WeaponPage/>
      },
      {
        path:"player-cards",
        element:<PlayerCardsPage/>
      },
      {
        path:"sprays",
        element:<SpraysPage/>
      }
    ]
  }
])

export const RouterProvider = () => {
  return <Provider router={router} />
}