import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Users from './Pages/users/Users';
import NewPlace from './Pages/places/NewPlace';
import RootPage from './Pages/shared/RootPage';
import UserPlaces from './Pages/places/UserPlaces';
import UpdatePlace from './Pages/places/UpdatePlace';
const router = createBrowserRouter([
  { path: '/', element: <RootPage />, children: [
    { index: true, element: <Users /> },
    { path: '/places/new', element: <NewPlace /> },
    { path: '/places/:placeId', element: <UpdatePlace /> },
    { path: '/:userId/places', element: <UserPlaces /> },
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
