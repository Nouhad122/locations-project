import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Users from './Pages/users/Users';
import NewPlace from './Pages/places/NewPlace';
import RootPage from './Pages/shared/RootPage';

const router = createBrowserRouter([
  { path: '/', element: <RootPage />, children: [
    { index: true, element: <Users /> },
    { path: '/places/new', element: <NewPlace /> },
  ]}
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
