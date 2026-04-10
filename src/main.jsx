import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import HomePage from './pages/HomePage/HomePage'
import Apps from './pages/Apps/Apps'
import InstallApps from './pages/InstallApps/InstallApps'
import NotFound from './pages/Error/NotFound'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout></RootLayout>,
      children: [
        {
          index: true,
          element:<HomePage></HomePage>
        },
        {
          path: '/apps',
          element:<Apps></Apps>
        },
        {
          path: '/installation',
          element:<InstallApps></InstallApps>
        }
      ],
      errorElement:<NotFound></NotFound>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
