import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home/Home'
import Inner from './pages/Inner/Inner'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/inner',
    element: <Inner />,
  },
])

function App(): JSX.Element {
  return <RouterProvider router={router} />
}

export default App
