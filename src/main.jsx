import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element:<RootLayout></RootLayout>
    },
    {
      path: '/apps',
      element:<h1>Apps</h1>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className='text-7xl text-green-500'>Hello</h1>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
